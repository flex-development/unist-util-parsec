/**
 * @file Utilities - out
 * @module unist-util-parsec/utils/out
 */

import type { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { ok } from 'devlop'

/**
 * Create a parser output object.
 *
 * @see {@linkcode ParseCandidate}
 * @see {@linkcode ParseError}
 * @see {@linkcode ParserOutput}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} Result - Parse candidate result
 * @template {ParserOutput<T, R>} [Output=ParserOutput<T,R>] - Parser output
 *
 * @param {boolean} successful - Boolean indicating parser success
 * @param {(ParseCandidate<T, Result>| null)?} [candidate] - Parse candidate,
 * only used if `successful` is `true`
 * @param {(ParseError | null)?} [error] - Parse error
 * @return {Output} Parser output
 */
function out<
  T extends TokenType,
  Result,
  Output extends ParserOutput<T, Result>
>(
  successful: boolean,
  candidate?: ParseCandidate<T, Result> | null,
  error?: ParseError | null
): Output {
  /**
   * Successful parser output.
   *
   * @var {ParserOutput<T, Result>} output
   */
  let output: ParserOutput<T, Result>

  if (candidate && successful) {
    output = { candidate, error, successful: true }
  } else {
    ok(error, 'expected parse error')
    output = { error, successful: false }
  }

  return !output.error && delete output.error, <Output>output
}

export default out
