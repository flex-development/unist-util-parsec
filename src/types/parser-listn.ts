/**
 * @file Type Aliases - ListNParser
 * @module unist-util-parsec/types/ListNParser
 */

import type { Parser } from '#src/interfaces'
import type ListNResult from './result-listn'
import type TokenType from './token-type'

/**
 * Exact list parser.
 *
 * @see {@linkcode ListNResult}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 * @template {number} [N=number] - List item count
 * @template {any} [R=any] - List item parse candidate result
 */
type ListNParser<
  T extends TokenType = TokenType,
  N extends number = number,
  R = any
> = Parser<T, ListNResult<N, R>>

export type { ListNParser as default }
