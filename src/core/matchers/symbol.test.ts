import { test } from 'node:test';

import { assertSymbol } from './symbol.ts';

await test('assertSymbol', () => {
  assertSymbol(Symbol('id'));
});
