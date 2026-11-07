import { test } from 'node:test';

import { assertCloseTo } from './close.ts';

await test('assertCloseTo', () => {
  assertCloseTo(3.14, 3.14159, 0.01);
});
