/**
 * @file Utilities - eof
 * @module unist-util-parsec/utils/eof
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import out from './out'

/**
 * Ensure all tokens are consumed.
 *
 * @see {@linkcode ParseCandidate}
 * @see {@linkcode ParserOutput}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {ParserOutput<T, R>} output - Parser output
 * @return {typeof output} `output`
 */
function eof<T extends TokenType, R>(
  output: ParserOutput<T, R>
): typeof output {
  if (!output.successful) return output

  /**
   * Parse error.
   *
   * @var {ParseError | null | undefined} error
   */
  let error: ParseError | null | undefined = output.error

  // fail output on missing candidate or unconsumed token
  if (!<ParseCandidate | null>output.candidate) {
    error = new ParseError(null, 'No parse candidate found')
  } else if (output.candidate.next) {
    error = new ParseError(output.candidate.next, 'Unable to reach end of file')
  }

  return out(
    !!<ParseCandidate | null>output.candidate && !output.candidate.next,
    output.candidate,
    error
  )
}

export default eof
