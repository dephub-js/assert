import { test } from 'node:test';

import { assertGreaterThan } from './greater.ts';

await test('assertGreaterThan', () => {
  assertGreaterThan(10, 3);
  assertGreaterThan(10n, 3n);
});
