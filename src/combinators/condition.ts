/**
 * @file Combinators - condition
 * @module unist-util-parsec/combinators/condition
 */

import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'

/**
 * Parse an occurrence of `a` if `condition` is truthy, `b` otherwise.
 *
 * Fails if the selected parser fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - Truthy parse candidate result
 * @template {any} R2 - Falsy parse candidate result
 *
 * @param {unknown} condition - Condition to apply
 * @param {Parser<T, R1>} a - Truthy parser
 * @param {Parser<T, R2>} b - Falsy parser
 * @return {Parser<T, R1 | R2>} Conditional parser
 */
function condition<T extends TokenType, R1, R2>(
  condition: unknown,
  a: Parser<T, R1>,
  b: Parser<T, R2>
): Parser<T, R1 | R2> {
  return Boolean(condition) ? a : b
}

export default condition
