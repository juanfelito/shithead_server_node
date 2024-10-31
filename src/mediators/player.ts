import { GraphQLError } from "graphql";
import { Option, Player, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

export class PlayerMediator {
    repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }

    async get_player(game_id: String, user_id: String): Promise<WithId<Player>> {
        const maybePlayer = await this.repo.get_player(game_id, user_id);
        if (maybePlayer == null) {
            throw new GraphQLError('Player not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }
        return maybePlayer as WithId<Player>;
    }

    async get_players(game_id: String, opponents: Boolean, player_id: Option<String>): Promise<WithId<Player>[]> {
        const players = await this.repo.get_players(game_id) as WithId<Player>[];
        if (players.length == 0) {
            throw new GraphQLError('Players not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }

        if (opponents) {
            return players.filter((player) => player.id.id != player_id);
        }

        return players;
    }

    async join_game(game_id: String, user_id: String): Promise<Boolean> {
        const game = await this.repo.get_game(game_id);

        if (game == null) {
            throw new GraphQLError('Game not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }

        const users = game.users;
        let already_joined = users?.some((user) => user.id.id == user_id);
        if (already_joined) {
            throw new GraphQLError('Already joined this game.', {
                extensions: {
                    code: 'ALREADY_EXISTS',
                },
            });
        }

        console.log(already_joined);

        return true;


        // if already_joined {
        //     return Err(anyhow!(MediatorError::AlreadyExists("Already joined this game".to_string())));
        // }
        // if game.inner.state != GameState::Lobby {
        //     return Err(anyhow!(MediatorError::Unavailable("Game already started".to_string())));
        // }

        // let turn = users.len();
        // println!("joining game...");

        // self.repo.join_game(game_id, user_id, turn)
        //         .await?
        //         .ok_or(anyhow!(MediatorError::Internal("Couldn't join the game".to_string())))
    }
}
