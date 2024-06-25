/**
 * @file Interfaces - ParseCandidate
 * @module unist-util-parsec/interfaces/ParseCandidate
 */

import type { TokenType } from '#src/types'
import type Token from './token'

/**
 * A candidate from a successful parse attempt.
 *
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 */
interface ParseCandidate<T extends TokenType = TokenType, R = any> {
  /**
   * First consumed token.
   *
   * @see {@linkcode Token}
   */
  head: Token<T> | undefined

  /**
   * Token to try consuming next.
   *
   * @see {@linkcode Token}
   */
  next: Token | undefined

  /**
   * Parse result.
   */
  result: R
}

export type { ParseCandidate as default }
