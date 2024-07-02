/**
 * @file Utilities - applyList
 * @module unist-util-parsec/utils/applyList
 */

import type { ListResult } from '#src/types'

/**
 * Create a list result.
 *
 * @see {@linkcode ListResult}
 *
 * @template {any} [R=any] - List item parse candidate result
 *
 * @param {[R, R[]]} value - Apply callback value
 * @return {ListResult<R>} List result
 */
function applyList<R = any>(value: [R, R[]]): ListResult<R> {
  return [value[0], ...value[1]]
}

export default applyList
