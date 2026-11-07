import { test } from 'node:test';

import { assertNaN } from './nan.ts';

await test('assertNaN', () => {
  assertNaN(NaN);
});
