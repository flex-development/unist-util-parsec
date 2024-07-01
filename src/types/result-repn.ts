/**
 * @file Type Aliases - RepNResult
 * @module unist-util-parsec/types/RepNResult
 */

import type Times from './times'

/**
 * Exact repetitive parser result.
 *
 * @template {number} N - Number of occurrences parsed
 * @template {any} [R=any] - Parse candidate result
 */
type RepNResult<N extends number, R = any> = Times<N, R>

export type { RepNResult as default }
