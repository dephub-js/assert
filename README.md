# @dephub/assert 🛡️

> A tiny, type-safe assertion library with structured errors for TypeScript/JavaScript.

[![NPM version](https://img.shields.io/npm/v/@dephub/assert.svg?style=flat)](https://npmjs.org/package/@dephub/assert)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 🎯 Type-safe assertions that narrow TypeScript types automatically.
- 🧩 Rich matcher set for primitives, collections, numbers, and regex.
- 🔍 Structured `AssertionError` with `code`, `expected`, and `received`.
- 🧪 Composable helpers like `assertAnyOf`, `assertNoneOf`, `assertThrows`, `assertRejects`.
- 📦 ESM-only, zero dependencies, works with the native `node:test` runner.

---

## Installation 📦

- npm: `npm install @dephub/assert`
- pnpm: `pnpm add @dephub/assert`
- yarn: `yarn add @dephub/assert`
- bun: `bun add @dephub/assert`

---

## Usage 🎯

### API 🧩

```ts
import {
  assertArray,
  assertDeepEqual,
  assertGreaterThan,
  assertMatch,
  assertThrows,
  assertRejects,
  assertBoolean,
  test,
} from '@dephub/assert';

// Type-narrowing assertions
function process(value: unknown) {
  assertArray<number>(value);
  // value is now Array<number>
  return value.reduce((a, b) => a + b, 0);
}

// Comparison
assertGreaterThan(10, 3);
assertDeepEqual({ a: 1 }, { a: 1 });

// String matching
assertMatch('hello world', /world$/);

// Error helpers
assertThrows(() => {
  throw new Error('boom');
});

await assertRejects(async () => {
  throw new Error('failure');
});

// Testing: `test` is re-exported from `node:test` for convenience
await test('assertBoolean', () => {
  // Asserts that the received value is a boolean, narrowing its type to `boolean`
  assertBoolean(true);
});
```

### Available exports

| Category                  | Functions                                                                                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type matchers**         | `assertArray`, `assertBigint`, `assertBoolean`, `assertDate`, `assertFunction`, `assertMap`, `assertNumber`, `assertObject`, `assertRecord`, `assertRegExp`, `assertSet`, `assertString`, `assertSymbol`, `assertThenable`, `assertUndefined`, `assertNull`, `assertNaN` |
| **Equality & comparison** | `assertEqual`, `assertDeepEqual`, `assertCloseTo`, `assertGreaterThan`, `assertGreaterThanOrEqual`, `assertLessThan`, `assertLessThanOrEqual`                                                                                                                            |
| **Content**               | `assertContain`, `assertLength`, `assertMatch`                                                                                                                                                                                                                           |
| **Truthiness**            | `assertTruthy`, `assertFalsy`, `assertDefined`                                                                                                                                                                                                                           |
| **Class & prototype**     | `assertInstanceOf`                                                                                                                                                                                                                                                       |
| **Composite utilities**   | `assertAnyOf`, `assertNoneOf`                                                                                                                                                                                                                                            |
| **Async / sync control**  | `assertThrows`, `assertRejects`, `assertResolves`                                                                                                                                                                                                                        |
| **Errors**                | `AssertionError`, `assertionError`                                                                                                                                                                                                                                       |
| **Testing**               | `test` (re-exported from `node:test`)                                                                                                                                                                                                                                    |

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
