import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { GameHandlers } from "../proto/shithead/Game";
import { SurrealDBRepo } from "../repo";
import { GetGameRequest } from "../proto/shithead/GetGameRequest";
import { GetGameResponse } from "../proto/shithead/GetGameResponse";
import { GameMediator } from "../mediators/game";
import { GetUserResponse } from "../proto/shithead/GetUserResponse";
import { CreateGameRequest } from "../proto/shithead/CreateGameRequest";
import { CreateGameResponse } from "../proto/shithead/CreateGameResponse";
import { StartGameRequest } from "../proto/shithead/StartGameRequest";
import { StartGameResponse } from "../proto/shithead/StartGameResponse";
import { GameState } from "../models";

export class GameController implements GameHandlers {
    private repo: SurrealDBRepo;

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }
    [name: string]: UntypedHandleCall;

    async GetGame(call: ServerUnaryCall<GetGameRequest, GetGameResponse>, callback: sendUnaryData<GetGameResponse>) {
        console.log(`Got a get game request: ${call.request}`);

        let res = await new GameMediator(this.repo).get_game(call.request.id!);
        const deck = res.deck.map(card => card.toString());
        const users: GetUserResponse[] = res.users!.map(user => ({
            id: user.id.id.toString(),
            name: user.name.toString()
        }));
        let state;
        switch (res.state) {
            case GameState.Lobby:
                state = "Lobby"
                break;
            case GameState.Started:
                state = "Started"
                break;
            case GameState.Finished:
                state = "Finished"
                break;
        }
        const response: GetGameResponse = {
            id: res.id.id.toString(),
            creatorId: res.creator.id.toString(),
            deck: deck,
            discardId: res.discard.id.toString(),
            playersOut: res.players_out,
            state: state,
            turn: res.turn,
            users: users
        }
        callback(null, response);
    }
    
    async CreateGame(call: ServerUnaryCall<CreateGameRequest, CreateGameResponse>, callback: sendUnaryData<CreateGameResponse>) {
        console.log(`Got a create game request: ${call.request}`);

        let res = await new GameMediator(this.repo).create_game(call.request.creator!);
        const response: CreateGameResponse = {
            id: res.id.id.toString(),
        }
        callback(null, response);
    }

    async StartGame(call: ServerUnaryCall<StartGameRequest, StartGameResponse>, callback: sendUnaryData<StartGameResponse>) {
        console.log(`Got a start game request: ${call.request}`);

        await new GameMediator(this.repo).start_game(call.request.userId!, call.request.gameId!);

        callback(null, {});
    }
}
