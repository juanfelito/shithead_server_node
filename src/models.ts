import { RecordId } from "surrealdb";

export type Option<T> = T | null;
export type WithId<T> = T & { id: RecordId };
export type In<T> = { in: T };

export type Discard = {
    cards: String[],
    current_value?: String,
    current_card?: String,
    repeat_count: Number,
};

export enum GameState {
    Lobby,
    Started,
    Finished,
}

export type Game = {
    creator: RecordId;
    deck: String[];
    discard: RecordId;
    players_out: number[];
    state: GameState;
    turn: number;
    users?: WithId<User>[];
}

export type User = {
    name: String
};

export type Player = {
    turn: number,
    cards: Cards,
    in: RecordId,
}

export type Cards = {
    hand: String[],
    face_up: String[],
    face_down: String[],
}

export type GameAndPlayer = {
    game: WithId<Game>,
    player: WithId<Player>,
}
