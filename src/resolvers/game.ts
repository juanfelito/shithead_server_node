import { DiscardMediator } from "../mediators/discard";
import { GameMediator } from "../mediators/game";
import { Discard, Game, In, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

type CreateGameRequestInput = {
    creatorId: String
}

export function game_resolvers(repo: SurrealDBRepo) {
    const resolvers = {
        Game: {
            discard: async (parent: WithId<Game>): Promise<WithId<Discard>> => {
                return await new DiscardMediator(repo).get_discard(parent.id.id.toString());
            }
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
