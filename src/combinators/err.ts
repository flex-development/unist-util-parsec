/**
 * @file Combinators - err
 * @module unist-util-parsec/combinators/err
 */

import type { Parser, Token } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { nok } from '#src/utils'

/**
 * Parse an occurrence of `x`.
 *
 * If `x` fails, the error message is replaced by `m`.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @param {(string | null)?} [m] - Reason for failure
 * @return {typeof x} `x`
 */
function err<T extends TokenType, R>(
  x: Parser<T, R>,
  m?: string | null
): typeof x {
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

    // replace error
    if (!output.successful) output.error = nok(token, m)

    return output
  }
}

export default err
