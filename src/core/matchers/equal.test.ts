import { test } from 'node:test';

import { assertEqual } from './equal.ts';

await test('assertEqual', () => {
  assertEqual(10, 10);
});
