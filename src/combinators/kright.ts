/**
 * @file Combinators - kright
 * @module unist-util-parsec/combinators/kright
 */

import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import apply from './apply'
import seq from './seq'

/**
 * Parse occurrences of `a` and `b` in sequence.
 *
 * Results in `Tb`; any result produced by `a` is discarded.
 *
 * Fails if `a` or `b` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} Left - Left parse candidate result
 * @template {any} Right - Right parse candidate result
 *
 * @param {Parser<T, Left>} a - Lefthand side parser
 * @param {Parser<T, Right>} b - Righthand side parser
 * @return {typeof b} Right-biased sequential parser
 */
function kright<T extends TokenType, Left, Right>(
  a: Parser<T, Left>,
  b: Parser<T, Right>
): typeof b {
  return apply(seq(a, b), value => value[1])
}

export default kright
