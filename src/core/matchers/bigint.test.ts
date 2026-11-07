import { test } from 'node:test';

import { assertBigint } from './bigint.ts';

await test('assertBigint', () => {
  assertBigint(10n);
});
