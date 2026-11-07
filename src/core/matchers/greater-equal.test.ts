import { test } from 'node:test';

import { assertGreaterThanOrEqual } from './greater-equal.ts';

await test('assertGreaterThanOrEqual', () => {
  assertGreaterThanOrEqual(5, 3);
  assertGreaterThanOrEqual(5n, 3n);
});
