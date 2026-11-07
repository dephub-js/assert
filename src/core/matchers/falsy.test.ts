import { test } from 'node:test';

import { assertFalsy } from './falsy.ts';

await test('assertFalsy', () => {
  assertFalsy(0);
});
