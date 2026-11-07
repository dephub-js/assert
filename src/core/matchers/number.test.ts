import { test } from 'node:test';

import { assertNumber } from './number.ts';

await test('assertNumber', () => {
  assertNumber(42);
});
