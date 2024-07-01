/**
 * @file Type Aliases - ApplyCallback
 * @module unist-util-parsec/types/ApplyCallback
 */

import type TokenRange from './token-range'

/**
 * Transform a parse candidate result.
 *
 * @see {@linkcode TokenRange}
 *
 * @template {any} [From=any] - Original parse candidate result
 * @template {any} [To=any] - Final parse candidate result
 * @template {TokenRange} [Range=TokenRange] - Token range
 *
 * @param {From} value - Parse candidate result
 * @param {Range} range - Token range of `value`
 * @return {To} Final parse candidate result
 */
type ApplyCallback<
  From = any,
  To = any,
  Range extends TokenRange = TokenRange
> = (value: From, range: Range) => To

export type { ApplyCallback as default }
