import { test } from 'node:test';

import { assertLessThan } from './less.ts';

await test('assertLessThan', () => {
  assertLessThan(5, 10);
  assertLessThan(5n, 10n);
});
