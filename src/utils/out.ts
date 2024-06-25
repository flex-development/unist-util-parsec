/**
 * @file Utilities - out
 * @module unist-util-parsec/utils/out
 */

import type { ParseError } from '#src/errors'
import type {
  ParseCandidate,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'

/**
 * Create a parser output object.
 *
 * @see {@linkcode ParseCandidate}
 * @see {@linkcode ParseError}
 * @see {@linkcode ParserOutput}
 * @see {@linkcode TokenType}
 * @see {@linkcode Token}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {ParseCandidate<T, R>[] | null | undefined} candidates - List of parse
 * candidates, only used if `successful` is `true`
 * @param {boolean} successful - Boolean indicating parser success
 * @param {(ParseError | null)?} [error] - Parse error
 * @return {ParserOutput<T, R>} Parser output
 */
function out<T extends TokenType, R>(
  candidates: ParseCandidate<T, R>[] | null | undefined,
  successful: boolean,
  error?: ParseError | null
): ParserOutput<T, R> {
  if (!(candidates && successful)) return { error: error!, successful: false }

  /**
   * Successful parser output.
   *
   * @const {SucceededParserOutput<T, R>} output
   */
  const output: SucceededParserOutput<T, R> = {
    candidates,
    error,
    successful: true
  }

  return !output.error && delete output.error, output
}

export default out
