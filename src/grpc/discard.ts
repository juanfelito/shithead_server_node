import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { DiscardHandlers } from "../proto/shithead/Discard";
import { SurrealDBRepo } from "../repo";
import { GetDiscardRequest } from "../proto/shithead/GetDiscardRequest";
import { GetDiscardResponse } from "../proto/shithead/GetDiscardResponse";
import { DiscardMediator } from "../mediators/discard";

export class DiscardController implements DiscardHandlers {
    private repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }
    [name: string]: UntypedHandleCall;

    async GetDiscard(call: ServerUnaryCall<GetDiscardRequest, GetDiscardResponse>, callback: sendUnaryData<GetDiscardResponse>) {
        console.log(`Got a get discard request: ${call.request}`);

        let res = await new DiscardMediator(this.repo).get_discard(call.request.gameId!);

        const cards = res.cards.map(card => card.toString());
        const response: GetDiscardResponse = {
            id: res.id.id.toString(),
            currentCard: res.current_card?.toString(),
            currentValue: res.current_value?.toString(),
            repeatCount: res.repeat_count.valueOf(),
            cards: cards
        }
        callback(null, response);
    }
}
