// Original file: proto/shithead.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetDiscardRequest as _shithead_GetDiscardRequest, GetDiscardRequest__Output as _shithead_GetDiscardRequest__Output } from './GetDiscardRequest';
import type { GetDiscardResponse as _shithead_GetDiscardResponse, GetDiscardResponse__Output as _shithead_GetDiscardResponse__Output } from './GetDiscardResponse';

export interface DiscardClient extends grpc.Client {
  GetDiscard(argument: _shithead_GetDiscardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  GetDiscard(argument: _shithead_GetDiscardRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  GetDiscard(argument: _shithead_GetDiscardRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  GetDiscard(argument: _shithead_GetDiscardRequest, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  getDiscard(argument: _shithead_GetDiscardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  getDiscard(argument: _shithead_GetDiscardRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  getDiscard(argument: _shithead_GetDiscardRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  getDiscard(argument: _shithead_GetDiscardRequest, callback: grpc.requestCallback<_shithead_GetDiscardResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DiscardHandlers extends grpc.UntypedServiceImplementation {
  GetDiscard: grpc.handleUnaryCall<_shithead_GetDiscardRequest__Output, _shithead_GetDiscardResponse>;
  
}

export interface DiscardDefinition extends grpc.ServiceDefinition {
  GetDiscard: MethodDefinition<_shithead_GetDiscardRequest, _shithead_GetDiscardResponse, _shithead_GetDiscardRequest__Output, _shithead_GetDiscardResponse__Output>
}
