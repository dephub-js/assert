import { test } from 'node:test';

import { assertDate } from './date.ts';

await test('assertDate', () => {
  assertDate(new Date());
});
