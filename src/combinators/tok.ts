/**
 * @file Combinators - tok
 * @module unist-util-parsec/combinators/tok
 */

import type {
  ParseCandidate,
  Parser,
  Token
} from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { nok, out } from '#src/utils'

/**
 * Consume a token of the specified `type`.
 *
 * Fails if the current token could not be consumed.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} T - Token type
 *
 * @param {T} type - Token type
 * @return {Parser<T, Token<T>>} Token type parser
 */
function tok<T extends TokenType>(type: T): Parser<T, Token<T>> {
  return { parse }

  /**
   * Consume a {@linkcode type} token.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, Token<T>>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, Token<T>> {
    /**
     * Parse candidate.
     *
     * @var {ParseCandidate<T, Token<T>> | null} candidate
     */
    let candidate: ParseCandidate<T, Token<T>> | null = null

    // check token type
    if (token && token.type === type) {
      candidate = { head: token, next: token.next, result: token }
    }

    return out(candidate !== null, candidate, nok(token))
  }
}

export default tok
