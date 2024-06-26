/**
 * @file Combinators - fail
 * @module unist-util-parsec/combinators/fail
 */

import type { FailedParser, FailedParserOutput, Token } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { nok, out } from '#src/utils'

/**
 * Fail without consuming a token.
 *
 * @see {@linkcode FailedParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 *
 * @param {(string | null)?} [reason] - Reason for failure
 * @return {FailedParser<T>} Failed parser
 */
function fail<T extends TokenType>(
  reason?: string | null
): FailedParser<T> {
  return { parse }

  /**
   * Fail without consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {FailedParserOutput<T>} Failed parser output
   */
  function parse(token?: Token<T>): FailedParserOutput<T> {
    return out(false, null, nok(token, reason))
  }
}

export default fail
