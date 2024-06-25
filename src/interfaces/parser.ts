/**
 * @file Interfaces - Parser
 * @module unist-util-parsec/interfaces/Parser
 */

import type { ParserOutput, TokenType } from '#src/types'
import type Token from './token'

/**
 * The main unit in a combinator-compatible grammar: a parser.
 *
 * A parser is an object object with a `parse` method that receives a token as
 * input, and returns an object reflecting the state of the parse attempt.
 *
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 */
interface Parser<T extends TokenType = TokenType, R = any> {
  /**
   * Parse `token`, with `undefined` denoting end of file.
   *
   * @see {@linkcode ParserOutput}
   * @see {@linkcode Token}
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, R>} Parser output
   */
  parse(token?: Token<T>): ParserOutput<T, R>
}

export type { Parser as default }
