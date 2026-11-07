/* eslint-disable @typescript-eslint/no-extraneous-class */
import { test } from 'node:test';

import { assertInstanceOf } from './instance-of.ts';

await test('assertInstanceOf', () => {
  class User {}
  const u = new User();
  assertInstanceOf(u, User);
});
