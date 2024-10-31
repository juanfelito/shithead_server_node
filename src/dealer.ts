import { Player, WithId } from "./models";

enum CardBucket {
    Hand,
    FaceUp,
    FaceDown
}

export class Dealer {
    initial_deal(deck: String[], players: WithId<Player>[]) {
        this.put_in_bucket(deck, players, CardBucket.FaceDown);
        this.put_in_bucket(deck, players, CardBucket.FaceUp);
        this.put_in_bucket(deck, players, CardBucket.Hand);
    }

    put_in_bucket(deck: String[], players: WithId<Player>[], bucket: CardBucket) {
        for (let i = 0; i < 3; i++) {
            for (let player of players) {
                const card = deck.pop()!;
                switch (bucket) {
                    case CardBucket.Hand:
                        player.cards.hand.push(card);
                        break;
                    case CardBucket.FaceUp:
                        player.cards.face_up.push(card);
                        break;
                    case CardBucket.FaceDown:
                        player.cards.face_down.push(card);
                        break;
                }
            }
        }
    }
}