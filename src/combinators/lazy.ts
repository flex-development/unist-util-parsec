/**
 * @file Combinators - lazy
 * @module unist-util-parsec/combinators/lazy
 */

import type { Parser, Token } from '#src/interfaces'
import type { ParserOutput, Thunk, TokenType } from '#src/types'

/**
 * Parse lazily.
 *
 * Fails if the parser returned by `thunk` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode Thunk}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Thunk} thunk - Function that returns a parser
 * @return {Parser<T, R>} Lazy parser
 */
function lazy<T extends TokenType, R>(thunk: Thunk<T, R>): Parser<T, R> {
  return { parse }

  /**
   * Try consuming `token`.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, R>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, R> {
    return thunk(token).parse(token)
  }
}

export default lazy
