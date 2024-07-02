/**
 * @file Type Aliases - ListResult
 * @module unist-util-parsec/types/ListResult
 */

/**
 * List parser result.
 *
 * @template {any} [R=any] - List item parse candidate result
 */
type ListResult<R = any> = [R, ...R[]]

export type { ListResult as default }
