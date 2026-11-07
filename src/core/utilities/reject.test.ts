import { test } from 'node:test';

import { assertRejects } from './reject.ts';

await test('assertRejects', async () => {
  await assertRejects(async () => {
    await Promise.resolve('...');
    throw new Error('failure');
  });
});
