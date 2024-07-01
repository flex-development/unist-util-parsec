/**
 * @file Type Aliases - Thunk
 * @module unist-util-parsec/types/Thunk
 */

import type { Parser, Token } from '#src/interfaces'
import type TokenType from './token-type'

/**
 * A function that receives the current token and returns a parser.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 *
 * @param {Token<T>?} [token] - Current token
 * @return {Parser<T, R>} Next parser
 */
type Thunk<
  T extends TokenType = TokenType,
  R = any
> = (token?: Token<T>) => Parser<T, R>

export type { Thunk as default }
