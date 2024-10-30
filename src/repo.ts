import Surreal, { RecordId } from "surrealdb";
import { Discard, Game, GameState, Option, User, WithId } from "./models";

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
        const game = result[0] as WithId<Game>;

        return game ? game : null;
    }

    async get_user(id: string): Promise<Option<WithId<User>>> {
        const user = await this.db.select(new RecordId("user", id)) as WithId<User>;

        return user ? user : null;
    }

    async get_discard(game_id: string): Promise<Option<WithId<Discard>>> {
        const sql = `SELECT discard FROM game:${game_id} fetch discard`;

        const result = await this.db.query(sql);
        const discard = result[0] as WithId<Discard>;

        return discard ? discard : null;
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
            playersOut: [],
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
}
