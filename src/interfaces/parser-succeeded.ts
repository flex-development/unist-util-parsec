/**
 * @file Interfaces - SucceededParser
 * @module unist-util-parsec/interfaces/SucceededParser
 */

import type { TokenType } from '#src/types'
import type Parser from './parser'
import type SucceededParserOutput from './parser-output-succeeded'
import type Token from './token'

/**
 * A successful parser.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 *
 * @extends {Parser<T,R>}
 */
interface SucceededParser<
  T extends TokenType = TokenType,
  R = any
> extends Parser<T, R> {
  /**
   * Parse `token`, with `undefined` denoting end of file.
   *
   * @see {@linkcode SucceededParserOutput}
   * @see {@linkcode Token}
   *
   * @param {Token<T>?} [token] - Current token
   * @return {SucceededParserOutput<T, R>} Parser output
   */
  parse(token?: Token<T>): SucceededParserOutput<T, R>
}

export type { SucceededParser as default }
