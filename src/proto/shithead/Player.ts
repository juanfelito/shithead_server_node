// Original file: proto/shithead.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetOpponentsRequest as _shithead_GetOpponentsRequest, GetOpponentsRequest__Output as _shithead_GetOpponentsRequest__Output } from './GetOpponentsRequest';
import type { GetOpponentsResponse as _shithead_GetOpponentsResponse, GetOpponentsResponse__Output as _shithead_GetOpponentsResponse__Output } from './GetOpponentsResponse';
import type { GetPlayerRequest as _shithead_GetPlayerRequest, GetPlayerRequest__Output as _shithead_GetPlayerRequest__Output } from './GetPlayerRequest';
import type { GetPlayerResponse as _shithead_GetPlayerResponse, GetPlayerResponse__Output as _shithead_GetPlayerResponse__Output } from './GetPlayerResponse';
import type { JoinGameRequest as _shithead_JoinGameRequest, JoinGameRequest__Output as _shithead_JoinGameRequest__Output } from './JoinGameRequest';
import type { JoinGameResponse as _shithead_JoinGameResponse, JoinGameResponse__Output as _shithead_JoinGameResponse__Output } from './JoinGameResponse';
import type { PlayRequest as _shithead_PlayRequest, PlayRequest__Output as _shithead_PlayRequest__Output } from './PlayRequest';
import type { PlayResponse as _shithead_PlayResponse, PlayResponse__Output as _shithead_PlayResponse__Output } from './PlayResponse';

export interface PlayerClient extends grpc.Client {
  GetOponents(argument: _shithead_GetOpponentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  GetOponents(argument: _shithead_GetOpponentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  GetOponents(argument: _shithead_GetOpponentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  GetOponents(argument: _shithead_GetOpponentsRequest, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  getOponents(argument: _shithead_GetOpponentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  getOponents(argument: _shithead_GetOpponentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  getOponents(argument: _shithead_GetOpponentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  getOponents(argument: _shithead_GetOpponentsRequest, callback: grpc.requestCallback<_shithead_GetOpponentsResponse__Output>): grpc.ClientUnaryCall;
  
  GetPlayer(argument: _shithead_GetPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  GetPlayer(argument: _shithead_GetPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  GetPlayer(argument: _shithead_GetPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  GetPlayer(argument: _shithead_GetPlayerRequest, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  getPlayer(argument: _shithead_GetPlayerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  getPlayer(argument: _shithead_GetPlayerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  getPlayer(argument: _shithead_GetPlayerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  getPlayer(argument: _shithead_GetPlayerRequest, callback: grpc.requestCallback<_shithead_GetPlayerResponse__Output>): grpc.ClientUnaryCall;
  
  JoinGame(argument: _shithead_JoinGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _shithead_JoinGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _shithead_JoinGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  JoinGame(argument: _shithead_JoinGameRequest, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _shithead_JoinGameRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _shithead_JoinGameRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _shithead_JoinGameRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  joinGame(argument: _shithead_JoinGameRequest, callback: grpc.requestCallback<_shithead_JoinGameResponse__Output>): grpc.ClientUnaryCall;
  
  Play(argument: _shithead_PlayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  Play(argument: _shithead_PlayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  Play(argument: _shithead_PlayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  Play(argument: _shithead_PlayRequest, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  play(argument: _shithead_PlayRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  play(argument: _shithead_PlayRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  play(argument: _shithead_PlayRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  play(argument: _shithead_PlayRequest, callback: grpc.requestCallback<_shithead_PlayResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PlayerHandlers extends grpc.UntypedServiceImplementation {
  GetOponents: grpc.handleUnaryCall<_shithead_GetOpponentsRequest__Output, _shithead_GetOpponentsResponse>;
  
  GetPlayer: grpc.handleUnaryCall<_shithead_GetPlayerRequest__Output, _shithead_GetPlayerResponse>;
  
  JoinGame: grpc.handleUnaryCall<_shithead_JoinGameRequest__Output, _shithead_JoinGameResponse>;
  
  Play: grpc.handleUnaryCall<_shithead_PlayRequest__Output, _shithead_PlayResponse>;
  
}

export interface PlayerDefinition extends grpc.ServiceDefinition {
  GetOponents: MethodDefinition<_shithead_GetOpponentsRequest, _shithead_GetOpponentsResponse, _shithead_GetOpponentsRequest__Output, _shithead_GetOpponentsResponse__Output>
  GetPlayer: MethodDefinition<_shithead_GetPlayerRequest, _shithead_GetPlayerResponse, _shithead_GetPlayerRequest__Output, _shithead_GetPlayerResponse__Output>
  JoinGame: MethodDefinition<_shithead_JoinGameRequest, _shithead_JoinGameResponse, _shithead_JoinGameRequest__Output, _shithead_JoinGameResponse__Output>
  Play: MethodDefinition<_shithead_PlayRequest, _shithead_PlayResponse, _shithead_PlayRequest__Output, _shithead_PlayResponse__Output>
}
