/**
 * @file Utilities - nok
 * @module unist-util-parsec/utils/nok
 */

import { ParseError } from '#src/errors'
import type { Token } from '#src/interfaces'
import type { TokenType } from '#src/types'

/**
 * Create a token error.
 *
 * @see {@linkcode ParseError}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} T - Unconsumed token type
 *
 * @param {(Token<T> | null)?} [token] - Current token
 * @param {(string | null)?} [reason] - Reason for error
 * @return {ParseError<T>} New parse error
 */
function nok<T extends TokenType>(
  token?: Token<T> | null,
  reason?: string | null
): ParseError<T> {
  if (!reason) reason = `${token ? 'Unexpected' : 'Expected'} token`
  return new ParseError<T>(token, reason)
}

export default nok
