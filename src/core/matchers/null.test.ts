import { test } from 'node:test';

import { assertNull } from './null.ts';

await test('assertNull', () => {
  assertNull(null);
});
