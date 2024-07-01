/**
 * @file Type Aliases - TokenRange
 * @module unist-util-parsec/types/TokenRange
 */

import type { Token } from '#src/interfaces'
import type TokenType from './token-type'

/**
 * Token tuple, where the first token is the first consumed token, and the
 * second is the next unconsumed token.
 *
 * @see {@linkcode Token}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [H=TokenType] - Consumed token type
 * @template {TokenType} [U=TokenType] - Unconsumed token type
 */
type TokenRange<
  H extends TokenType = TokenType,
  U extends TokenType = TokenType
> = [head?: Token<H> | undefined, next?: Token<U> | undefined]

export type { TokenRange as default }
