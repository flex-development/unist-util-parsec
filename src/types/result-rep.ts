/**
 * @file Type Aliases - RepResult
 * @module unist-util-parsec/types/RepResult
 */

/**
 * Repetitive parser result.
 *
 * @template {any} [R=any] - Parse candidate result
 */
type RepResult<R = any> = [] | [R, ...R[]]

export type { RepResult as default }
