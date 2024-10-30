import { GraphQLError } from "graphql";
import { Game, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

export class GameMediator {
    repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }

    async create_game(creator_id: String): Promise<WithId<Game>> {
        // creating a new discard pile...
        const discard = await this.repo.create_empty_discard();

        // creating a new game...
        const game = await this.repo.create_game(discard.id, creator_id.toString());

        // joining game...
        this.repo.join_game(game.id.id.toString(), creator_id, 0);

        return game;
    }

    async get_game(id: String): Promise<WithId<Game>> {
        const maybeGame = await this.repo.get_game(id);
        if (maybeGame == null) {
            throw new GraphQLError('Game not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }

        return maybeGame as WithId<Game>;
    }
}
