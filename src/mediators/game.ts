import { GraphQLError } from "graphql";
import { Game, GameState, WithId, User } from "../models";
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

    async start_game(user_id: String, game_id: String): Promise<Boolean> {
        const game = await this.repo.get_game(game_id);
        if (game == null) {
            throw new GraphQLError('Game not found.', {
                extensions: {
                    code: 'NOT_FOUND',
                },
            });
        }
        
        if (game.creator.id != user_id) {
            throw new GraphQLError('Only the creator can start the game.', {
                extensions: {
                    code: 'UNAUTHORIZED',
                },
            });
        }

        if (game.state != GameState.Lobby) {
            throw new GraphQLError('Game already started.', {
                extensions: {
                    code: 'UNAVAILABLE',
                },
            });
        }

        const numUsers = game.users?.length as number;

        if (numUsers < 2) {
            throw new GraphQLError('Not enough players in lobby, at least 2 required.', {
                extensions: {
                    code: 'UNAVAILABLE',
                },
            });
        }

        return true;

        // let mut deck = self.card_manager.new_deck(1);

        // let mut players = self.repo.get_players(game_id).await?;

        // Dealer::initial_deal(&mut deck, &mut players);

        // game.inner.state = GameState::Started;
        // game.inner.deck = deck;
        // game.inner.users = None;
        
        // self.repo.start_game(game, players)
        //         .await?
        //         .ok_or(anyhow!(MediatorError::Internal("Couldn't start the game".to_string())))
    }
}
