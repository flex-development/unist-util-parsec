/**
 * @file Combinators - val
 * @module unist-util-parsec/combinators/val
 */

import type {
  ParseCandidate,
  Parser,
  Token
} from '#src/interfaces'
import type { ParserOutput, TokenType, TokenValue } from '#src/types'
import { nok, out } from '#src/utils'

/**
 * Consume a token with the specified `value`.
 *
 * Fails if a token cannot be consumed.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 * @see {@linkcode TokenValue}
 * @see {@linkcode Token}
 *
 * @template {TokenType} T - Token type
 *
 * @param {TokenValue} value - Token value
 * @return {Parser<T, Token<T>>} Token value parser
 */
function val<T extends TokenType>(value: TokenValue): Parser<T, Token<T>> {
  return { parse }

  /**
   * Consume a token with {@linkcode value}.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, Token<T>>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, Token<T>> {
    /**
     * Parse candidates.
     *
     * @const {ParseCandidate<T, Token<T>>[]} candidates
     */
    const candidates: ParseCandidate<T, Token<T>>[] = []

    // check token value
    if (token && token.value === value) {
      candidates.push({ head: token, next: token.next, result: token })
    }

    return out(candidates, candidates.length > 0, nok(token))
  }
}

export default val
