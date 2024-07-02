/**
 * @file Test Utilities - isParseCandidate
 * @module tests/utils/isParseCandidate
 */

import type { ParseCandidate, Point } from '#src/interfaces'
import isToken from '#src/utils/is-token'

/**
 * Check if the specified `value` is a parse candidate.
 *
 * @see {@linkcode Point}
 *
 * @param {unknown?} [value] - Value to check
 * @return {value is Point} `true` if `value` is parse candidate
 */
function isParseCandidate(value?: unknown): value is ParseCandidate {
  return (
    check(value) &&
    (value.head === undefined || isToken(value.head)) &&
    (value.next === undefined || isToken(value.next))
  )

  /**
   * Check if `value` is parse candidate like.
   *
   * @param {unknown?} [value] - Value to check
   * @return {value is ParseCandidate} `true` if `value` is parse candidate like
   */
  function check(value?: unknown): value is ParseCandidate {
    return value !== null && typeof value === 'object' && 'result' in value
  }
}

export default isParseCandidate
