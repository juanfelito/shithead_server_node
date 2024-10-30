import { RecordId } from "surrealdb";

export type Option<T> = T | null;
export type WithId<T> = T & { id: RecordId };

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
    deck: string[];
    discard: RecordId;
    playersOut: number[];
    state: GameState;
    turn: number;
    users?: WithId<User>[];
}

export type User = {
    name: String
};

