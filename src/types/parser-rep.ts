/**
 * @file Type Aliases - RepParser
 * @module unist-util-parsec/types/RepParser
 */

import type { SucceededParser } from '#src/interfaces'
import type RepResult from './result-rep'
import type TokenType from './token-type'

/**
 * Repetitive parser.
 *
 * @see {@linkcode RepResult}
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 * @template {any} [R=any] - Parse candidate result
 */
type RepParser<
  T extends TokenType = TokenType,
  R = any
> = SucceededParser<T, RepResult<R>>

export type { RepParser as default }
