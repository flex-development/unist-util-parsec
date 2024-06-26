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
import { out } from '#src/utils'

/**
 * Succeed without consuming a token.
 *
 * Never fails, results in `undefined`.
 *
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 *
 * @return {SucceededParser<T, undefined>} Successful parser
 */
function succ<T extends TokenType>(): SucceededParser<T, undefined>

/**
 * Succeed without consuming a token.
 *
 * Never fails, results in `value`.
 *
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {R} value - Parse candidate result
 * @return {SucceededParser<T, R>} Successful parser
 */
function succ<T extends TokenType, R>(value: R): SucceededParser<T, R>

/**
 * Succeed without consuming a token.
 *
 * Never fails.
 *
 * @see {@linkcode SucceededParser}
 *
 * @param {any?} [value] - Parse candidate result
 * @return {SucceededParser} Successful parser
 */
function succ(value?: any): SucceededParser {
  return { parse }

  /**
   * Succeed without consuming `token`.
   *
   * @param {Token?} [token] - Current token
   * @return {SucceededParserOutput} Successful parser output
   */
  function parse(token?: Token): SucceededParserOutput {
    return out(true, { head: token, next: token, result: value })
  }
}

export default succ
