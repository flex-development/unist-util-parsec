/**
 * @file Combinators - ksides
 * @module unist-util-parsec/combinators/ksides
 */

import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import apply from './apply'
import seq from './seq'

/**
 * Parse occurrences of `a`, `b`, and `c` in sequence.
 *
 * Results in `[Ta, Tc]`; any result produced by `b` is discarded.
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
 * @return {Parser<T, [Left, Right]>} Sides-biased sequential parser
 */
function ksides<T extends TokenType, Left, Middle, Right>(
  a: Parser<T, Left>,
  b: Parser<T, Middle>,
  c: Parser<T, Right>
): Parser<T, [Left, Right]> {
  return apply(seq(a, b, c), value => [value[0], value[2]])
}

export default ksides
