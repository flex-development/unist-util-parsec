/**
 * @file Type Aliases - CombineCallback
 * @module unist-util-parsec/types/CombineCallback
 */

import type { Parser } from '#src/interfaces'
import type TokenRange from './token-range'
import type TokenType from './token-type'

/**
 * Create a parser from a previous parse candidate result.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 * @template {any} [From=any] - Previous parse candidate result
 * @template {any} [To=any] - Next parse candidate result
 * @template {TokenRange} [R=TokenRange] - Token range of `T`
 *
 * @param {From} value - Previous parse candidate result
 * @param {R} range - Token range of `value`
 * @return {Parser<T, To>} Next parser
 */
type CombineCallback<
  T extends TokenType = TokenType,
  From = any,
  To = any
> = (value: From, range: TokenRange) => Parser<T, To>

export type { CombineCallback as default }
