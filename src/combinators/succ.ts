/**
 * @file Combinators - succ
 * @module unist-util-parsec/combinators/succ
 */

import type {
  SucceededParser,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { TokenType } from '#src/types'

/**
 * Succeed without consuming a token.
 *
 * Never fails, results in `R`.
 *
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {R} result - Parse candidate result
 * @return {SucceededParser<T, R>} Successful parser
 */
function succ<T extends TokenType, R>(result: R): SucceededParser<T, R> {
  return { parse }

  /**
   * Succeed without consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {SucceededParserOutput<T, R>} Successful parser output
   */
  function parse(token?: Token<T>): SucceededParserOutput<T, R> {
    return {
      candidates: [{ head: token, next: token, result: result }],
      successful: true
    }
  }
}

export default succ
