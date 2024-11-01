// Original file: proto/shithead.proto

import type { Cards as _shithead_Cards, Cards__Output as _shithead_Cards__Output } from './Cards';

export interface GetPlayerResponse {
  'id'?: (string);
  'turn'?: (number);
  'cards'?: (_shithead_Cards | null);
  'userId'?: (string);
}

export interface GetPlayerResponse__Output {
  'id'?: (string);
  'turn'?: (number);
  'cards'?: (_shithead_Cards__Output);
  'userId'?: (string);
}
