/**
 * @file Utilities - applyLrec
 * @module unist-util-parsec/utils/applyLrec
 */

import type {
  ApplyCallback,
  LrecCallback,
  RepResult,
  TokenRange
} from '#src/types'

/**
 * Create an applicative parser callback for a left recursive parser.
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode LrecCallback}
 *
 * @template {any} [R=any] - Final parse candidate result
 * @template {any} [P=any] - First parse candidate result
 * @template {any} [Q=any] - Second parse candidate result
 *
 * @param {LrecCallback<R, P, Q>} f - Parse candidate result callback
 * @return {ApplyCallback<[P, RepResult<[Q, TokenRange]>], R>} Apply callback
 */
function applyLrec<R = any, P = any, Q = any>(
  f: LrecCallback<R, P, Q>
): ApplyCallback<[P, RepResult<[Q, TokenRange]>], R> {
  return callback

  /**
   * Create a recursive, left-associative parse candidate result.
   *
   * @param {[P, RepResult<[Q, TokenRange]>]} value - Apply callback value
   * @return {R} Final parse candidate result
   */
  function callback(value: [P, RepResult<[Q, TokenRange]>]): R {
    /**
     * Parse candidate result.
     *
     * @var {P | R} result
     */
    let result: P | R = value[0]

    for (const tail of value[1]) result = f(result, ...tail)

    return <R>result
  }
}

export default applyLrec
