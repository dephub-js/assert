import { test } from 'node:test';

import { assertThrows } from '#/core/utilities/throws.ts';

import { assertionError } from './error.ts';

await test('assertionError', () => {
  assertThrows(() => {
    throw assertionError({
      code: 'NOT_EQUAL',
      expected: 42,
      message: 'Values should be strictly equal',
      received: 43,
    });
  });
});
