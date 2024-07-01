/**
 * @file Combinators - range
 * @module unist-util-parsec/combinators/range
 */

import type { Parser } from '#src/interfaces'
import type { RangeResult, TokenRange, TokenType } from '#src/types'
import apply from './apply'

/**
 * Parse an occurrence of `x`.
 *
 * Results in `[Tx, Range]`.
 *
 * Fails if `x` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode RangeResult}
 * @see {@linkcode TokenRange}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} Result - Parse candidate result
 * @template {TokenRange} Range - Token range
 *
 * @param {Parser<T, Result>} x - Parser to apply
 * @return {Parser<T, RangeResult<Result, Range>>} Range parser
 */
function range<
  T extends TokenType,
  Result,
  Range extends TokenRange = TokenRange
>(x: Parser<T, Result>): Parser<T, RangeResult<Result, Range>> {
  return apply<T, Result, [Result, Range], Range>(x, (value, range) => [
    value,
    range
  ])
}

export default range
