import { DiscardMediator } from "../mediators/discard";
import { SurrealDBRepo } from "../repo";

export function discard_resolvers(repo: SurrealDBRepo) {
    const resolvers = {
        Query: {
            async getDiscard(_: null, args: {game_id: String}) {
                return new DiscardMediator(repo).get_discard(args.game_id);
            }
        }
    }

    return resolvers
}
