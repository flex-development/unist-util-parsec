/**
 * @file Combinators - chk
 * @module unist-util-parsec/combinators/chk
 */

import type { Parser, Token } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'

/**
 * Check if `x` succeeds without consuming a token.
 *
 * Fails if `x` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @return {typeof x} `x`
 */
function chk<T extends TokenType, R>(x: Parser<T, R>): typeof x {
  return { parse }

  /**
   * Try consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, R>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, R> {
    /**
     * Parser output.
     *
     * @const {ParserOutput<T, R>} output
     */
    const output: ParserOutput<T, R> = x.parse(token)

    // revert consumed tokens
    if (output.successful) {
      output.candidate = {
        head: token,
        next: token,
        result: output.candidate.result
      }
    }

    return output
  }
}

export default chk
