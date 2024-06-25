/**
 * @file Type Aliases - ParserOutput
 * @module unist-util-parsec/types/ParserOutput
 */

import type { FailedParserOutput, SucceededParserOutput } from '#src/interfaces'
import type TokenType from './token-type'

/**
 * The state of a parse attempt.
 *
 * @see {@linkcode FailedParserOutput}
 * @see {@linkcode SucceededParserOutput}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} [T=TokenType] - First consumed token type
 * @template {any} [R=any] - Parse candidate result
 */
type ParserOutput<T extends TokenType = TokenType, R = any> =
  | FailedParserOutput
  | SucceededParserOutput<T, R>

export type { ParserOutput as default }
