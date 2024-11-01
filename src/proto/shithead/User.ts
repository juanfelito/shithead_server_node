// Original file: proto/shithead.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _shithead_CreateUserRequest, CreateUserRequest__Output as _shithead_CreateUserRequest__Output } from './CreateUserRequest';
import type { CreateUserResponse as _shithead_CreateUserResponse, CreateUserResponse__Output as _shithead_CreateUserResponse__Output } from './CreateUserResponse';
import type { GetUserRequest as _shithead_GetUserRequest, GetUserRequest__Output as _shithead_GetUserRequest__Output } from './GetUserRequest';
import type { GetUserResponse as _shithead_GetUserResponse, GetUserResponse__Output as _shithead_GetUserResponse__Output } from './GetUserResponse';

export interface UserClient extends grpc.Client {
  CreateUser(argument: _shithead_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _shithead_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _shithead_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _shithead_CreateUserRequest, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _shithead_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _shithead_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _shithead_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _shithead_CreateUserRequest, callback: grpc.requestCallback<_shithead_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _shithead_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _shithead_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _shithead_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _shithead_GetUserRequest, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _shithead_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _shithead_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _shithead_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _shithead_GetUserRequest, callback: grpc.requestCallback<_shithead_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_shithead_CreateUserRequest__Output, _shithead_CreateUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_shithead_GetUserRequest__Output, _shithead_GetUserResponse>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_shithead_CreateUserRequest, _shithead_CreateUserResponse, _shithead_CreateUserRequest__Output, _shithead_CreateUserResponse__Output>
  GetUser: MethodDefinition<_shithead_GetUserRequest, _shithead_GetUserResponse, _shithead_GetUserRequest__Output, _shithead_GetUserResponse__Output>
}
