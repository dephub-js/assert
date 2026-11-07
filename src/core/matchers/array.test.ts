import { test } from 'node:test';

import { assertArray } from './array.ts';

await test('assertArray', () => {
  assertArray([1, 2, 3]);
});
