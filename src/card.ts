export enum Suit {
    Spades = "♠",
    Clubs = "♣",
    Hearts = "♥",
    Diamonds = "♦"
}

export enum CardValue {
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K",
    Ace = "A"
}

export function new_deck(num_decks: number): String[] {
    let deck: String[] = [];

    for (let i = 0; i < num_decks; i++) {
        for (const suit of Object.values(Suit)) {
            for (const value of Object.values(CardValue)) {
                deck.push(`${value}${suit}`);
            }
        }
    }
    
    deck = shuffleDeck(deck);
    return deck;
}

export function shuffleDeck(deck: String[]): String[] {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}
