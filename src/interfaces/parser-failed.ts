/**
 * @file Interfaces - FailedParser
 * @module unist-util-parsec/interfaces/FailedParser
 */

import type { TokenType } from '#src/types'
import type Parser from './parser'
import type FailedParserOutput from './parser-output-failed'
import type Token from './token'

/**
 * A failed parser.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Unconsumed token type
 *
 * @extends {Parser<T,never>}
 */
interface FailedParser<
  T extends TokenType = TokenType
> extends Parser<T, never> {
  /**
   * Parse `token`, with `undefined` denoting end of file.
   *
   * @see {@linkcode FailedParserOutput}
   * @see {@linkcode Token}
   *
   * @param {Token<T>?} [token] - Current token
   * @return {FailedParserOutput<T>} Parser output
   */
  parse(token?: Token<T>): FailedParserOutput<T>
}

export type { FailedParser as default }
