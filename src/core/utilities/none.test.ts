import { test } from 'node:test';

import { assertNumber } from '#/core/matchers/number.ts';
import { assertString } from '#/core/matchers/string.ts';

import { assertNoneOf } from './none.ts';

await test('assertNoneOf', () => {
  const value = false;
  assertNoneOf(
    () => assertNumber(value),
    () => assertString(value),
  );
});
