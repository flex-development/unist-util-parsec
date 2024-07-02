/**
 * @file Combinators - lrec
 * @module unist-util-parsec/combinators/lrec
 */

import type { Parser } from '#src/interfaces'
import type { LrecCallback, TokenType } from '#src/types'
import { applyLrec } from '#src/utils'
import apply from './apply'
import range from './range'
import rep from './rep'
import seq from './seq'

/**
 * Parse `p` followed by zero (`0`) to infinite occurrences of `q`.
 *
 * The result is obtained by a recursive, left-associative application of `f` to
 * the values returned by `p` and `q`.
 *
 * If `q` succeeds with zero (`0`) parse candidates, only candidates from `p`
 * are returned. When `q` succeeds multiple times, callback `f` is called
 * multiple times. This means parse candidates of `p` should be compatible with
 * the return type of `f`.
 *
 * Fails if `p` fails.
 *
 * > 👉 This combinator is particularly useful for eliminating left recursion,
 * > which typically occurs in expression grammars.
 *
 * @see {@linkcode LrecCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Final parse candidate result
 * @template {R} P - Parse candidate result of `p`
 * @template {any} Q - Parse candidate result of `q`
 *
 * @param {Parser<T, P>} p - First parser to apply
 * @param {Parser<T, Q>} q - Second parser to apply
 * @param {LrecCallback<T, P, Q>} f - Result callback
 * @return {Parser<T, R>} Left recursive parser
 */
function lrec<T extends TokenType, R, P extends R, Q>(
  p: Parser<T, P>,
  q: Parser<T, Q>,
  f: LrecCallback<R, P, Q>
): Parser<T, R> {
  return apply(seq(p, rep(range(q))), applyLrec(f))
}

export default lrec
