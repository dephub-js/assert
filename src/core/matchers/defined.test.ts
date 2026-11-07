import { test } from 'node:test';

import { assertDefined } from './defined.ts';

await test('assertDefined', () => {
  assertDefined('something');
});
