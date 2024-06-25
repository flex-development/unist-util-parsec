/**
 * @file Interfaces - FailedParserOutput
 * @module unist-util-parsec/interfaces/FailedParserOutput
 */

import type { ParseError } from '#src/errors'
import type { TokenType } from '#src/types'
import type ParseCandidate from './parse-candidate'

/**
 * Output from a failed parse attempt.
 *
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - Unconsumed token type
 */
interface FailedParserOutput<T extends TokenType = TokenType> {
  /**
   * Parse candidates.
   */
  candidates?: [] | ParseCandidate<T, never>[] | null | undefined

  /**
   * Parse error.
   *
   * @see {@linkcode ParseError}
   */
  error: ParseError<T>

  /**
   * Boolean indicating parser failure.
   */
  successful: false
}

export type { FailedParserOutput as default }
