import { test } from 'node:test';

import { assertDeepEqual } from './deep-equal.ts';

await test('assertDeepEqual', () => {
  assertDeepEqual({ a: 1 }, { a: 1 });
});
