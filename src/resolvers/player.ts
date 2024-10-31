import { PlayerMediator } from "../mediators/player";
import { UserMediator } from "../mediators/user";
import { In, Player, User, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

type JoinGameRequestInput = {
	userId: String
	gameId: String
}

export function player_resolvers(repo: SurrealDBRepo) {
    const resolvers = {
        Player: {
            user: async (parent: WithId<Player>): Promise<WithId<User>> => {
                return await new UserMediator(repo).get_user(parent.in.id.toString());
            }
        },
        Query: {
            async getPlayer(_: null, args: {user_id: String, game_id: String}) {
                return new PlayerMediator(repo).get_player(args.game_id, args.user_id);
            },
            async getOponents(_: null, args: {player_id: String, game_id: String}) {
                return new PlayerMediator(repo).get_players(args.game_id, true, args.player_id);
            }
        },
        Mutation: {
            async joinGame(_: null, input: In<JoinGameRequestInput>): Promise<Boolean> {
                return (await new PlayerMediator(repo).join_game(input.in.gameId, input.in.userId));
            }
        }
    }

    return resolvers
}
