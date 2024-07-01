/**
 * @file Type Aliases - RepNParser
 * @module unist-util-parsec/types/RepNParser
 */

import type { Parser } from '#src/interfaces'
import type RepNResult from './result-repn'
import type TokenType from './token-type'

/**
 * Exact repetitive parser.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode RepNResult}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 * @template {number} [N=number] - Number of occurrences to parse
 * @template {any} [R=any] - Parse candidate result
 */
type RepNParser<
  T extends TokenType = TokenType,
  N extends number = number,
  R = any
> = Parser<T, RepNResult<N, R>>

export type { RepNParser as default }
