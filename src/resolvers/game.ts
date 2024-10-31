import { DiscardMediator } from "../mediators/discard";
import { GameMediator } from "../mediators/game";
import { PlayerMediator } from "../mediators/player";
import { Discard, Game, In, Player, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

type CreateGameRequestInput = {
    creatorId: String
}

export function game_resolvers(repo: SurrealDBRepo) {
    const resolvers = {
        Game: {
            discard: async (parent: WithId<Game>): Promise<WithId<Discard>> => {
                return await new DiscardMediator(repo).get_discard(parent.id.id.toString());
            },
            players: async (parent: WithId<Game>): Promise<WithId<Player>[]> => {
                return await new PlayerMediator(repo).get_players(parent.id.id.toString(), false, null);
            },
        },
        Query: {
            async getGame(_: null, args: {id: String}){
                return new GameMediator(repo).get_game(args.id);
            }
        },
        Mutation: {
            async createGame(_: null, input: In<CreateGameRequestInput>): Promise<String> {
                return (await new GameMediator(repo).create_game(input.in.creatorId)).id.toString();
            },
        }
    }

    return resolvers
}
