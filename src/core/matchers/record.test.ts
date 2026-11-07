import { test } from 'node:test';

import { assertRecord } from './record.ts';

await test('assertRecord', () => {
  assertRecord({ key: 'value' });
});
