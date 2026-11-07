import { test } from 'node:test';

import { assertThrows } from '#/core/utilities/throws.ts';

await test('assertThrows', () => {
  assertThrows(() => {
    throw new Error('boom');
  });
});
