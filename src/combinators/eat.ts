/**
 * @file Combinators - eat
 * @module unist-util-parsec/combinators/eat
 */

import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { nok, out } from '#src/utils'

/**
 * Consume any token.
 *
 * Fails if no token can be consumed.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 *
 * @return {Parser<T, Token<T>>} Any token parser
 */
function eat<T extends TokenType>(): Parser<T, Token<T>> {
  return { parse }

  /**
   * Consume `token`.
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

    // consume token
    if (token) candidate = { head: token, next: token.next, result: token }

    return out(candidate !== null, candidate, nok(token))
  }
}

export default eat
