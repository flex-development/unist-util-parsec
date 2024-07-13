/**
 * @file Errors - ParseError
 * @module unist-util-parsec/errors/parse
 */

import type { Position, Token } from '#src/interfaces'
import type { TokenType } from '#src/types'

/**
 * Parse error model.
 *
 * @template {TokenType} [T=TokenType] - Token type
 *
 * @class
 * @extends {Error}
 */
class ParseError<T extends TokenType = TokenType> extends Error {
  /**
   * Cause of error.
   *
   * @see {@linkcode Token}
   *
   * @public
   * @override
   * @instance
   * @member {Token<T> | null | undefined} [cause]
   */
  public override cause: Token<T> | null | undefined

  /**
   * Reason for error.
   *
   * @public
   * @override
   * @instance
   * @member {string} message
   */
  public override message!: string

  /**
   * Error name.
   *
   * @public
   * @override
   * @instance
   * @member {string} name
   */
  public override name: string

  /**
   * Position of error.
   *
   * @see {@linkcode Position}
   *
   * @public
   * @instance
   * @member {Position | null | undefined} range
   */
  public range: Position | null | undefined

  /**
   * Create a new parse error.
   *
   * @see {@linkcode Token}
   *
   * @param {(Token<T> | null | undefined)?} [token=null] - The erroneous token
   * @param {string?} [reason=''] - Reason for parse error
   */
  constructor(token: Token<T> | null | undefined = null, reason: string = '') {
    super()

    super.message = reason
    this.name = 'ParseError'

    if (token) {
      this.cause = token
      this.range = { end: this.cause.end, start: this.cause.start }
    }

    Object.defineProperties(this, { range: { enumerable: false } })
  }

  /**
   * Get the better parse error between `e1` and `e2`.
   *
   * The better parse error is the one located furthest from the start point
   * of a parsed source region.
   *
   * @public
   * @static
   *
   * @param {(ParseError | null)?} e1 - First parse error
   * @param {(ParseError | null)?} e2 - Second parse error
   * @return {ParseError | null | undefined} Best parse error
   */
  public static best(
    e1?: ParseError | null,
    e2?: ParseError | null
  ): ParseError | null | undefined {
    if (!e1) return e2
    if (!e2) return e1

    if (!e1.range) return e1
    if (!e2.range) return e2

    return e1.range.start.offset < e2.range.start.offset ? e2 : e1
  }
}

export default ParseError
