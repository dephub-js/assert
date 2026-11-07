import { test } from 'node:test';

import { assertMap } from './map.ts';

await test('assertMap', () => {
  assertMap(new Map());
});
