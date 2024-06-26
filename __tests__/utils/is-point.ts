/**
 * @file Test Utilities - isPoint
 * @module tests/utils/isPoint
 */

import type { Point } from '#src/interfaces'

/**
 * Check if the specified `value` is a point.
 *
 * @see {@linkcode Point}
 *
 * @param {unknown?} [value] - Value to check
 * @return {value is Point} `true` if `value` is point
 */
function isPoint(value?: unknown): value is Point {
  return (
    value !== null &&
    typeof value === 'object' &&
    'column' in value &&
    'line' in value &&
    'offset' in value &&
    Number.isInteger(value.column) &&
    Number.isInteger(value.line) &&
    Number.isInteger(value.offset)
  )
}

export default isPoint
