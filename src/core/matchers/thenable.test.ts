import { test } from 'node:test';

import { assertThenable } from './thenable.ts';

await test('assertThenable', () => {
  assertThenable({ then: () => {} });
});
