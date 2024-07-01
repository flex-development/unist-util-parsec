/**
 * @file Combinators - match
 * @module unist-util-parsec/combinators/match
 */

import type {
  ParseCandidate,
  Parser,
  Token
} from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { nok, out } from '#src/utils'

/**
 * Consume a token whose value matches `pattern`.
 *
 * Fails if the current token could not be consumed.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} T - Token type
 *
 * @param {RegExp | string} pattern - Regular expression pattern
 * @param {string?} [flags] - Regular expression flags
 * @return {Parser<T, Token<T>>} Token value pattern parser
 */
function match<T extends TokenType>(
  pattern: RegExp | string,
  flags?: string
): Parser<T, Token<T>> {
  return { parse }

  /**
   * Consume a token whose value matches {@linkcode pattern}.
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

    // test token value
    if (
      token &&
      token.value !== null &&
      new RegExp(pattern, flags).test(token.value)
    ) {
      candidate = { head: token, next: token.next, result: token }
    }

    return out(candidate !== null, candidate, nok(token))
  }
}

export default match
