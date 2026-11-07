import { test } from 'node:test';

import { assertNumber } from '#/core/matchers/number.ts';
import { assertString } from '#/core/matchers/string.ts';

import { assertAnyOf } from './any.ts';

await test('assertAnyOf', () => {
  const value = 'Hello';
  assertAnyOf(
    () => assertNumber(value),
    () => assertString(value),
  );
});
