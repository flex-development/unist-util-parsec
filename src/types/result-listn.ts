/**
 * @file Type Aliases - ListNResult
 * @module unist-util-parsec/types/ListNResult
 */

import type Times from './times'

/**
 * Exact list parser result.
 *
 * @template {number} N - List item count
 * @template {any} [R=any] - List item parse candidate result
 */
type ListNResult<N extends number, R = any> = Times<N, R>

export type { ListNResult as default }
