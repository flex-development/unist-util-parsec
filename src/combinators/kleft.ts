/**
 * @file Combinators - kleft
 * @module unist-util-parsec/combinators/kleft
 */

import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import apply from './apply'
import seq from './seq'

/**
 * Parse occurrences of `a` and `b` in sequence.
 *
 * Results in `Ta`; any result produced by `b` is discarded.
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
 * @param {Parser} b - Righthand side parser
 * @return {typeof a} Left-biased sequential parser
 */
function kleft<T extends TokenType, Left, Right>(
  a: Parser<T, Left>,
  b: Parser<T, Right>
): typeof a {
  return apply(seq(a, b), value => value[0])
}

export default kleft
