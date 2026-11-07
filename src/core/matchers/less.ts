import { assertAnyOf } from '#/core/utilities/any.ts';
import { AssertionError } from '#/core/utilities/error.ts';
import { format } from '#/private/format.ts';

import { assertBigint } from './bigint.ts';
import { assertNumber } from './number.ts';

/**
 * Asserts that the received value is less than the expected number or bigint.
 *
 * @template T - A number or bigint.
 * @param received - Value to validate.
 * @param expected - Value that received should be less than.
 * @param message - Optional custom error message.
 * @throws {AssertionError} When the value is not less than expected.
 * @returns {asserts received is T extends number ? number : bigint} Narrows the type after validation.
 *
 * @example
 * assertLessThan(5, 10);
 * assertLessThan(5n, 10n);
 */
export function assertLessThan<T extends bigint | number>(
  received: unknown,
  expected: T,
  message?: string,
): asserts received is T extends number ? number : bigint {
  assertAnyOf(
    () => assertNumber(received),
    () => assertBigint(received),
  );

  assertAnyOf(
    () => assertNumber(expected),
    () => assertBigint(expected),
  );

  if (!((received as bigint | number) < expected)) {
    throw new AssertionError({
      code: 'NOT_LESS_THAN',
      expected,
      message:
        message ?? `Expected ${format(received)} to be less than ${expected}`,
      received,
    });
  }
}
