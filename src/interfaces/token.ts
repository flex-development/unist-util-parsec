/**
 * @file Interfaces - Token
 * @module unist-util-parsec/interfaces/Token
 */

import type { TokenKind, TokenValue } from '#src/types'
import type Point from './point'

/**
 * Parser combinator-compatible token.
 *
 * This interface can be augmented to register custom token fields.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface Token {
 *      data?: Record<string, string> | undefined
 *    }
 *  }
 *
 * @see {@linkcode TokenKind}
 *
 * @template {TokenKind} [K=TokenKind] - Token kind
 */
interface Token<K extends TokenKind = TokenKind> {
  /**
   * Point where token ends.
   *
   * @see {@linkcode Point}
   */
  end: Point

  /**
   * Token kind.
   */
  readonly kind: K

  /**
   * Next token.
   */
  next: Token | undefined

  /**
   * Point where token starts.
   *
   * @see {@linkcode Point}
   */
  start: Point

  /**
   * Token value.
   *
   * @see {@linkcode TokenValue}
   */
  value: TokenValue
}

export type { Token as default }
