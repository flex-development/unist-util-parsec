/**
 * @file Type Aliases - RangeResult
 * @module unist-util-parsec/types/RangeResult
 */

import type TokenRange from './token-range'
import type TokenType from './token-type'

/**
 * Tuple, where the first item is a parse candidate result, and the second is
 * the range of the result.
 *
 * @see {@linkcode TokenType}
 *
 * @template {any} [Result=any] - Parse candidate result
 * @template {TokenRange} [Range=TokenRange] - Token range
 */
type RangeResult<
  Result = any,
  Range extends TokenRange = TokenRange
> = [result: Result, range: Range]

export type { RangeResult as default }
