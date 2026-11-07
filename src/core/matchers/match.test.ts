import { test } from 'node:test';

import { assertMatch } from './match.ts';

await test('assertMatch', () => {
  assertMatch('hello world', /world$/);
});
