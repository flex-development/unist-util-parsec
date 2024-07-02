/**
 * @file Type Aliases - OneOrMany
 * @module unist-util-parsec/types/OneOrMany
 */

/**
 * Construct a union of `T` and an array of `T` values.
 *
 * @internal
 *
 * @template T - Type to evaluate
 */
type OneOrMany<T> = T | T[] | readonly T[]

export type { OneOrMany as default }
