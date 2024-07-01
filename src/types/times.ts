/**
 * @file Type Aliases - Times
 * @module unist-util-parsec/types/Times
 */

/**
 * Construct a tuple of length `L`.
 *
 * @internal
 *
 * @template L - Tuple length
 * @template V - Tuple item type
 * @template Acc - Tuple element accumulator
 */
type Times<
  L extends number,
  V = unknown,
  Acc extends readonly unknown[] = []
> = // dprint-ignore
  [L] extends [never]
  ? []
  : number extends L
  ? V[]
  : [`${L}`] extends [`-${number}`]
  ? []
  : Acc extends { length: L }
  ? Acc
  : Times<L, V, [...Acc, V]>

export type { Times as default }
