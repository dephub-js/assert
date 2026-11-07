import { test } from 'node:test';

import { assertObject } from './object.ts';

await test('assertObject', () => {
  assertObject(new Date());
});
