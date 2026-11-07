import { test } from 'node:test';

import { assertUndefined } from './undefined.ts';

await test('assertUndefined', () => {
  assertUndefined(undefined);
});
