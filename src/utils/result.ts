/**
 * @file Utilities - result
 * @module unist-util-parsec/utils/result
 */

import type { ParseError } from '#src/errors'
import type { FailedParserOutput } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'

/**
 * Extract a parse candidate result from a parser `output` object.
 *
 * @see {@linkcode FailedParserOutput}
 * @see {@linkcode ParseError}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 *
 * @param {FailedParserOutput<T>} output - Parser output
 * @return {never} Never
 * @throws {ParseError}
 */
function result<T extends TokenType>(output: FailedParserOutput<T>): never

/**
 * Extract a parse candidate result from a parser `output` object.
 *
 * @see {@linkcode ParseError}
 * @see {@linkcode ParserOutput}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {ParserOutput<T, R>} output - Parser output
 * @return {R} Parse candidate result
 * @throws {ParseError} If `output.successful` is `false`
 */
function result<T extends TokenType, R>(output: ParserOutput<T, R>): R

/**
 * Extract a parse candidate result from a parser `output` object.
 *
 * @see {@linkcode ParseError}
 * @see {@linkcode ParserOutput}
 * @see {@linkcode TokenType}
 *
 * @param {ParserOutput<TokenType, unknown>} output - Parser output
 * @return {unknown} Parse candidate result
 * @throws {ParseError} If `output.successful` is `false`
 */
function result(output: ParserOutput<TokenType, unknown>): unknown {
  if (!output.successful) throw output.error
  return output.candidate.result
}

export default result
