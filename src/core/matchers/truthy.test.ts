import { test } from 'node:test';

import { assertTruthy } from './truthy.ts';

await test('assertTruthy', () => {
  assertTruthy('hello');
});
