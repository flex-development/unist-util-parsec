/**
 * @file Interfaces - SucceededParserOutput
 * @module unist-util-parsec/interfaces/SucceededParserOutput
 */

import type { ParseError } from '#src/errors'
import type { TokenType } from '#src/types'
import type ParseCandidate from './parse-candidate'

/**
 * Output from a successful parse attempt.
 *
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 */
interface SucceededParserOutput<T extends TokenType = TokenType, R = any> {
  /**
   * Parse candidates.
   *
   * @see {@linkcode ParseCandidate}
   */
  candidates: ParseCandidate<T, R>[]

  /**
   * Parse error.
   *
   * @see {@linkcode ParseError}
   */
  error?: ParseError | null | undefined

  /**
   * Boolean indicating parser success.
   */
  successful: true
}

export type { SucceededParserOutput as default }
