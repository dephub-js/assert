import { test } from 'node:test';

import { assertResolves } from './resolve.ts';

await test('assertResolves', async () => {
  await assertResolves(async () => await Promise.resolve(42));
});
