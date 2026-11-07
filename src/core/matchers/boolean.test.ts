import { test } from 'node:test';

import { assertBoolean } from './boolean.ts';

await test('assertBoolean', () => {
  assertBoolean(true);
});
