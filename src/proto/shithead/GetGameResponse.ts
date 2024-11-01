// Original file: proto/shithead.proto

import type { GetUserResponse as _shithead_GetUserResponse, GetUserResponse__Output as _shithead_GetUserResponse__Output } from './GetUserResponse';

export interface GetGameResponse {
  'creatorId'?: (string);
  'deck'?: (string)[];
  'discardId'?: (string);
  'id'?: (string);
  'playersOut'?: (number)[];
  'state'?: (string);
  'turn'?: (number);
  'users'?: (_shithead_GetUserResponse)[];
}

export interface GetGameResponse__Output {
  'creatorId'?: (string);
  'deck'?: (string)[];
  'discardId'?: (string);
  'id'?: (string);
  'playersOut'?: (number)[];
  'state'?: (string);
  'turn'?: (number);
  'users'?: (_shithead_GetUserResponse__Output)[];
}
