import Surreal, { RecordId } from "surrealdb";
import { Discard, Game, GameAndPlayer, GameState, Option, Player, User, WithId } from "./models";

// Define the database configuration interface
type DbConfig = {
    url: string;
    namespace: string;
    database: string;
}

// Define the default database configuration
const DEFAULT_CONFIG: DbConfig = {
    url: "http://0.0.0.0:8000",
    namespace: "shithead",
    database: "shithead",
};

export class SurrealDBRepo {
    db: Surreal;

    constructor() {
        this.db = new Surreal();
    }

    async init(config: DbConfig = DEFAULT_CONFIG) {
        try {
            await this.db.connect(config.url)
            await this.db.use({
                namespace: config.namespace,
                database: config.database
            })
        } catch (err) {
            console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
            await this.db.close();
            throw err;
        }
    }

    async get_game(id: String): Promise<Option<WithId<Game>>> {
        const sql = `SELECT *, <-player<-user.* AS users FROM game:${id}`;

        const result = await this.db.query(sql);
        const game = result[0] as WithId<Game>[];

        return game[0] ? game[0] : null;
    }

    async get_user(id: string): Promise<Option<WithId<User>>> {
        const user = await this.db.select(new RecordId("user", id)) as WithId<User>;

        return user ? user : null;
    }

    async get_discard(game_id: string): Promise<Option<WithId<Discard>>> {
        const sql = `SELECT discard FROM game:${game_id} fetch discard`;

        const result = await this.db.query(sql);
        const discard = result[0] as { discard: WithId<Discard> }[];

        return discard[0] ? discard[0].discard : null;
    }

    async create_user(user: User): Promise<WithId<User>> {
        const created = await this.db.create("user", user);
        const createdUser = created[0] as WithId<User>;

        if (!createdUser) {
            throw new Error("User creation failed");
        }

        return createdUser;
    }

    async create_game(discard_id: RecordId, creator_id: string): Promise<WithId<Game>> {
        const emptyGame: Game = {
            creator: new RecordId("user", creator_id),
            deck: [],
            discard: discard_id,
            players_out: [],
            state: GameState.Lobby,
            turn: 0,
        }
        const created = await this.db.create("game", emptyGame);
        const game = created[0] as WithId<Game>;

        if (!game) {
            throw new Error("Game creation failed");
        }

        return game
    }

    async create_empty_discard(): Promise<WithId<Discard>> {
        const empty_discard: Discard = {
            repeat_count: 0,
            cards: []
        }

        const created = await this.db.create("discard", empty_discard);
        const discard = created[0] as WithId<Discard>;

        if (!discard) {
            throw new Error("Discard creation failed");
        }

        return discard
    }

    async join_game(game_id: String, user_id: String, turn: number): Promise<Option<WithId<Player>>> {
        const sql = `RELATE user:${user_id}->player->game:${game_id} CONTENT {{turn: ${turn}, cards: {{hand: [], face_up: [], face_down: []}}}}`;

        const result = await this.db.query(sql);
        const player = result.at(0) as WithId<Player>[];

        return player[0] ? player[0] : null;
    }

    async get_players(game_id: String): Promise<WithId<Player>[]> {
        const sql = `SELECT * FROM player WHERE ->(game WHERE id = game:${game_id})`;

        const result = await this.db.query(sql);
        return result[0] as WithId<Player>[];
    }

    async get_player(game_id: String, user_id: String): Promise<Option<WithId<Player>>> {
        const sql = `SELECT * FROM player WHERE <-(user WHERE id = user:${user_id}) AND ->(game WHERE id = game:${game_id})`;

        const result = await this.db.query(sql);
        const player = result.at(0) as WithId<Player>[];
        
        return player[0] ? player[0] : null;
    }

    async start_game(game: WithId<Game>, players: WithId<Player>[]): Promise<Option<WithId<Game>>> {
        for (const player of players) {
            await this.db.update(player.id, player);
        }

        const result = await this.db.update(game.id, game);
        const updated_game = result.at(0) as WithId<Game>;

        return updated_game ? updated_game : null;
    }

    async get_player_and_game(player_id: String): Promise<(GameAndPlayer)> {
        const sql = `SELECT *, <-player<-user.* AS users FROM game WHERE <-(player WHERE id = player:${player_id}); SELECT * FROM player:${player_id};`;

        const result = await this.db.query(sql);
        const game = result.at(0) as WithId<Game>[];
        const player = result.at(1) as WithId<Player>[];

        const response: GameAndPlayer = {
            game: game[0],
            player: player[0],
        }
        
        return response
    }

    async commit_play(game: WithId<Game>, discard: WithId<Discard>, player: WithId<Player>) {
        await this.db.update("game", game);
        await this.db.update("player", player);
        await this.db.update("discard", discard);
    }
}
