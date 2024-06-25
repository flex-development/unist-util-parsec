/**
 * @file Interfaces - Token
 * @module unist-util-parsec/interfaces/Token
 */

import type { TokenType, TokenValue } from '#src/types'
import type Position from './position'

/**
 * A span of one (`1`) or more characters.
 *
 * Tokens are essentially names attached to a slice of characters, such as `eof`
 * for end of file, or `whitespace` for whitespace characters.
 *
 * Sometimes tokens need more info. This interface can be augmented to register
 * custom token fields.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface Token {
 *      whitespace?: string | undefined
 *    }
 *  }
 *
 * @see {@linkcode Position}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Token type
 *
 * @extends {Position}
 */
interface Token<T extends TokenType = TokenType> extends Position {
  /**
   * Next token in linked token list.
   */
  next?: Token | undefined

  /**
   * Previous token in linked token list.
   */
  previous?: Token | undefined

  /**
   * Token type.
   */
  type: T

  /**
   * Token value.
   *
   * @see {@linkcode TokenValue}
   */
  value: TokenValue
}

export type { Token as default }
