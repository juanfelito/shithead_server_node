// Original file: proto/shithead.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateGameRequest as _shithead_CreateGameRequest, CreateGameRequest__Output as _shithead_CreateGameRequest__Output } from './CreateGameRequest';
import type { CreateGameResponse as _shithead_CreateGameResponse, CreateGameResponse__Output as _shithead_CreateGameResponse__Output } from './CreateGameResponse';
import type { GetGameRequest as _shithead_GetGameRequest, GetGameRequest__Output as _shithead_GetGameRequest__Output } from './GetGameRequest';
import type { GetGameResponse as _shithead_GetGameResponse, GetGameResponse__Output as _shithead_GetGameResponse__Output } from './GetGameResponse';
import type { StartGameRequest as _shithead_StartGameRequest, StartGameRequest__Output as _shithead_StartGameRequest__Output } from './StartGameRequest';
import type { StartGameResponse as _shithead_StartGameResponse, StartGameResponse__Output as _shithead_StartGameResponse__Output } from './StartGameResponse';

export interface GameClient extends grpc.Client {
  CreateGame(argument: _shithead_CreateGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _shithead_CreateGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _shithead_CreateGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  CreateGame(argument: _shithead_CreateGameRequest, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  createGame(argument: _shithead_CreateGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  createGame(argument: _shithead_CreateGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  createGame(argument: _shithead_CreateGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  createGame(argument: _shithead_CreateGameRequest, callback: grpc.requestCallback<_shithead_CreateGameResponse__Output>): grpc.ClientUnaryCall;
  
  GetGame(argument: _shithead_GetGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  GetGame(argument: _shithead_GetGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  GetGame(argument: _shithead_GetGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  GetGame(argument: _shithead_GetGameRequest, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  getGame(argument: _shithead_GetGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  getGame(argument: _shithead_GetGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  getGame(argument: _shithead_GetGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  getGame(argument: _shithead_GetGameRequest, callback: grpc.requestCallback<_shithead_GetGameResponse__Output>): grpc.ClientUnaryCall;
  
  StartGame(argument: _shithead_StartGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _shithead_StartGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _shithead_StartGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  StartGame(argument: _shithead_StartGameRequest, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  startGame(argument: _shithead_StartGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  startGame(argument: _shithead_StartGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  startGame(argument: _shithead_StartGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  startGame(argument: _shithead_StartGameRequest, callback: grpc.requestCallback<_shithead_StartGameResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GameHandlers extends grpc.UntypedServiceImplementation {
  CreateGame: grpc.handleUnaryCall<_shithead_CreateGameRequest__Output, _shithead_CreateGameResponse>;
  
  GetGame: grpc.handleUnaryCall<_shithead_GetGameRequest__Output, _shithead_GetGameResponse>;
  
  StartGame: grpc.handleUnaryCall<_shithead_StartGameRequest__Output, _shithead_StartGameResponse>;
  
}

export interface GameDefinition extends grpc.ServiceDefinition {
  CreateGame: MethodDefinition<_shithead_CreateGameRequest, _shithead_CreateGameResponse, _shithead_CreateGameRequest__Output, _shithead_CreateGameResponse__Output>
  GetGame: MethodDefinition<_shithead_GetGameRequest, _shithead_GetGameResponse, _shithead_GetGameRequest__Output, _shithead_GetGameResponse__Output>
  StartGame: MethodDefinition<_shithead_StartGameRequest, _shithead_StartGameResponse, _shithead_StartGameRequest__Output, _shithead_StartGameResponse__Output>
}
