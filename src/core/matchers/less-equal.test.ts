import { test } from 'node:test';

import { assertLessThanOrEqual } from './less-equal.ts';

await test('assertLessThanOrEqual', () => {
  assertLessThanOrEqual(5, 10);
  assertLessThanOrEqual(10n, 10n);
});
