/**
 * @file Combinators - kmid
 * @module unist-util-parsec/combinators/kmid
 */

import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import apply from './apply'
import seq from './seq'

/**
 * Parse occurrences of `a`, `b`, and `c` in sequence.
 *
 * Results in `Tb`; any result produced by `a` or `c` is discarded.
 *
 * Fails if `a`, `b`, or `c` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} Left - Left parse candidate result
 * @template {any} Middle - Middle parse candidate result
 * @template {any} Right - Right parse candidate result
 *
 * @param {Parser<T, Left>} a - Lefthand side parser
 * @param {Parser<T, Middle>} b - Middle parser
 * @param {Parser<T, Right>} c - Righthand side parser
 * @return {typeof b} Middle-biased sequential parser
 */
function kmid<T extends TokenType, Left, Middle, Right>(
  a: Parser<T, Left>,
  b: Parser<T, Middle>,
  c: Parser<T, Right>
): typeof b {
  return apply(seq(a, b, c), value => value[1])
}

export default kmid
