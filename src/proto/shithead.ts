import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DiscardClient as _shithead_DiscardClient, DiscardDefinition as _shithead_DiscardDefinition } from './shithead/Discard';
import type { GameClient as _shithead_GameClient, GameDefinition as _shithead_GameDefinition } from './shithead/Game';
import type { PlayerClient as _shithead_PlayerClient, PlayerDefinition as _shithead_PlayerDefinition } from './shithead/Player';
import type { UserClient as _shithead_UserClient, UserDefinition as _shithead_UserDefinition } from './shithead/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  shithead: {
    Cards: MessageTypeDefinition
    CreateGameRequest: MessageTypeDefinition
    CreateGameResponse: MessageTypeDefinition
    CreateUserRequest: MessageTypeDefinition
    CreateUserResponse: MessageTypeDefinition
    Discard: SubtypeConstructor<typeof grpc.Client, _shithead_DiscardClient> & { service: _shithead_DiscardDefinition }
    Game: SubtypeConstructor<typeof grpc.Client, _shithead_GameClient> & { service: _shithead_GameDefinition }
    GetDiscardRequest: MessageTypeDefinition
    GetDiscardResponse: MessageTypeDefinition
    GetGameRequest: MessageTypeDefinition
    GetGameResponse: MessageTypeDefinition
    GetOpponentsRequest: MessageTypeDefinition
    GetOpponentsResponse: MessageTypeDefinition
    GetPlayerRequest: MessageTypeDefinition
    GetPlayerResponse: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    GetUserResponse: MessageTypeDefinition
    JoinGameRequest: MessageTypeDefinition
    JoinGameResponse: MessageTypeDefinition
    PlayRequest: MessageTypeDefinition
    PlayResponse: MessageTypeDefinition
    Player: SubtypeConstructor<typeof grpc.Client, _shithead_PlayerClient> & { service: _shithead_PlayerDefinition }
    StartGameRequest: MessageTypeDefinition
    StartGameResponse: MessageTypeDefinition
    User: SubtypeConstructor<typeof grpc.Client, _shithead_UserClient> & { service: _shithead_UserDefinition }
  }
}

