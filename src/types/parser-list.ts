/**
 * @file Type Aliases - ListParser
 * @module unist-util-parsec/types/ListParser
 */

import type { Parser } from '#src/interfaces'
import type ListResult from './result-list'
import type TokenType from './token-type'

/**
 * List parser.
 *
 * @see {@linkcode ListResult}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 * @template {any} [R=any] - List item parse candidate result
 */
type ListParser<
  T extends TokenType = TokenType,
  R = any
> = Parser<T, ListResult<R>>

export type { ListParser as default }
