import { test } from 'node:test';

import { assertString } from './string.ts';

await test('assertString', () => {
  assertString('hola');
});
