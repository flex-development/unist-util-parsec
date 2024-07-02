/**
 * @file Type Aliases - LrecCallback
 * @module unist-util-parsec/types/LrecCallback
 */

import type TokenRange from './token-range'

/**
 * Left recursive parser callback.
 *
 * @see {@linkcode TokenRange}
 *
 * @template {any} [R=any] - Final parse candidate result
 * @template {any} [A=any] - First parse candidate result
 * @template {any} [B=any] - Second parse candidate result
 *
 * @param {A | R} a - First parse candidate result
 * @param {B} b - Second parse candidate result
 * @param {TokenRange} range - Token range of `b`
 * @return {R} Final parse candidate result
 */
type LrecCallback<
  R = any,
  A = any,
  B = any
> = (a: A | R, b: B, range: TokenRange) => R

export type { LrecCallback as default }
