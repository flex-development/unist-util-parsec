/**
 * @file Combinators - errf
 * @module unist-util-parsec/combinators/errf
 */

import type {
  Parser,
  SucceededParser,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { nok } from '#src/utils'

/**
 * Optionally parse an occurrence of `x`.
 *
 * If `x` fails, the error message is replaced by `m` and no tokens are
 * consumed.
 *
 * Results in `Tx` if `x` succeeds, or `Tf` if `x` fails.
 *
 * Never fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 * @template {any} F - Fallback parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @param {F} result - Fallback parse candidate result
 * @param {(string | null | undefined)?} [m] - Reason for failure
 * @return {SucceededParser<T, F | R>} Fallback parser
 */
function errf<T extends TokenType, R, F>(
  x: Parser<T, R>,
  result: F,
  m?: string | null | undefined
): SucceededParser<T, F | R> {
  return { parse }

  /**
   * Try consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {SucceededParserOutput<T, F | R>} Parser output
   */
  function parse(token?: Token<T>): SucceededParserOutput<T, F | R> {
    /**
     * Parser output.
     *
     * @const {ParserOutput<T, R>} output
     */
    const output: ParserOutput<T, R> = x.parse(token)

    // succeed with fallback
    if (!output.successful) {
      return {
        candidate: { head: token, next: token, result },
        error: nok(token, m),
        successful: true
      }
    }

    return output
  }
}

export default errf
