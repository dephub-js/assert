import { test } from 'node:test';

import { assertRegExp } from './regexp.ts';

await test('assertRegExp', () => {
  assertRegExp(/test/);
});
