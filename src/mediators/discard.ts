import { GraphQLError } from "graphql";
import { Discard, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

export class DiscardMediator {
    repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }

    async get_discard(game_id: String): Promise<WithId<Discard>> {
        const maybeDiscard = await this.repo.get_discard(game_id.toString());
        if (maybeDiscard == null) {
            throw new GraphQLError('Discard not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }

        return maybeDiscard as WithId<Discard>;
    }
}
