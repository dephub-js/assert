import { test } from 'node:test';

import { assertFunction } from './function.ts';

await test('assertFunction', () => {
  assertFunction(() => 123);
});
