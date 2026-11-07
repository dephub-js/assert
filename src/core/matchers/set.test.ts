import { test } from 'node:test';

import { assertSet } from './set.ts';

await test('assertSet', () => {
  assertSet(new Set([1, 2, 3]));
});
