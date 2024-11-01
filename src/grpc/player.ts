import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { PlayerHandlers } from "../proto/shithead/Player";
import { SurrealDBRepo } from "../repo";
import { GetPlayerRequest } from "../proto/shithead/GetPlayerRequest";
import { GetPlayerResponse } from "../proto/shithead/GetPlayerResponse";
import { PlayerMediator } from "../mediators/player";
import { Cards as ProtoCards } from "../proto/shithead/Cards";
import { GetOpponentsRequest } from "../proto/shithead/GetOpponentsRequest";
import { GetOpponentsResponse } from "../proto/shithead/GetOpponentsResponse";
import { Cards } from "../models";
import { JoinGameRequest } from "../proto/shithead/JoinGameRequest";
import { JoinGameResponse } from "../proto/shithead/JoinGameResponse";
import { PlayRequest } from "../proto/shithead/PlayRequest";
import { PlayResponse } from "../proto/shithead/PlayResponse";

export class PlayerController implements PlayerHandlers {
    private repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }
    [name: string]: UntypedHandleCall;

    async GetPlayer(call: ServerUnaryCall<GetPlayerRequest, GetPlayerResponse>, callback: sendUnaryData<GetPlayerResponse>) {
        console.log(`Got a get player request: ${call.request}`);

        let res = await new PlayerMediator(this.repo).get_player(call.request.gameId!, call.request.userId!);

        const response: GetPlayerResponse = {
            id: res.id.id.toString(),
            turn: res.turn,
            userId: res.in.id.toString(),
            cards: this.parseCards(res.cards),
        }
        callback(null, response);
    }
    
    async GetOponents(call: ServerUnaryCall<GetOpponentsRequest, GetOpponentsResponse>, callback: sendUnaryData<GetOpponentsResponse>) {
        console.log(`Got a get opponents request: ${call.request}`);

        let res = await new PlayerMediator(this.repo).get_players(call.request.gameId!, true, call.request.playerId!);
        const response: GetOpponentsResponse = {
            opponents: res.map(opponent => ({
                id: opponent.id.id.toString(),
                turn: opponent.turn,
                userId: opponent.in.id.toString(),
                cards: this.parseCards(opponent.cards)
        }))};
        callback(null, response);
    }

    async JoinGame(call: ServerUnaryCall<JoinGameRequest, JoinGameResponse>, callback: sendUnaryData<JoinGameResponse>) {
        console.log(`Got a join game request: ${call.request}`);

        await new PlayerMediator(this.repo).join_game(call.request.gameId!, call.request.userId!);

        callback(null, {});
    }

    async Play(call: ServerUnaryCall<PlayRequest, PlayResponse>, callback: sendUnaryData<PlayResponse>) {
        console.log(`Got a play request: ${call.request}`);

        //await new PlayerMediator(this.repo).(call.request.gameId!, call.request.userId!);

        callback(null, {});
    }

    private parseCards(cards: Cards): ProtoCards {
        return {
            hand: cards.hand.map(card => card.toString()),
            faceUp: cards.face_up.map(card => card.toString()),
            faceDown: cards.face_down.map(card => card.toString()),
        }
    }
}