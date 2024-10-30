import { GraphQLError } from "graphql";
import { Player, WithId } from "../models";
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
}
