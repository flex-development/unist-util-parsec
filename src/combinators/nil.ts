/**
 * @file Combinators - nil
 * @module unist-util-parsec/combinators/nil
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
 * Never fails, results in `undefined`.
 *
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 *
 * @return {SucceededParser<T, undefined>} Nil parser
 */
function nil<T extends TokenType>(): SucceededParser<T, undefined> {
  return { parse }

  /**
   * Succeed without consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {SucceededParserOutput<T, undefined>} Successful parser output
   */
  function parse(token?: Token<T>): SucceededParserOutput<T, undefined> {
    return {
      candidates: [{ head: token, next: token, result: undefined }],
      successful: true
    }
  }
}

export default nil
