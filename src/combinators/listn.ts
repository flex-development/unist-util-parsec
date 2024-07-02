/**
 * @file Combinators - listn
 * @module unist-util-parsec/combinators/listn
 */

import type { Parser } from '#src/interfaces'
import type { ListNParser, TokenType } from '#src/types'
import { applyList } from '#src/utils'
import apply from './apply'
import kright from './kright'
import repn from './repn'
import seq from './seq'
import succ from './succ'

/**
 * Parse a list of length `n`.
 *
 * Results in `Tx[]`.
 *
 * Fails if `x` succeeds less than `n` times, unless `n` is less than `1`.
 *
 * @see {@linkcode ListNParser}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {number} N - List item count
 * @template {any} Item - List item parse candidate result
 * @template {any} [Separator=any] - List item separator candidate result
 *
 * @param {N} n - List item count
 * @param {Parser<T, Item>} x - List item parser
 * @param {Parser<T, Separator>} s - List separator parser
 * @return {ListNParser<T, N, Item>} Exact list parser
 */
function listn<T extends TokenType, N extends number, Item, Separator = any>(
  n: N,
  x: Parser<T, Item>,
  s: Parser<T, Separator>
): ListNParser<T, N, Item> {
  /**
   * List parser.
   *
   * @var {Parser<T, Item[]>} parser
   */
  let parser: Parser<T, Item[]>

  // get list parser
  switch (true) {
    case n < 1:
      parser = succ<T, never[]>([])
      break
    case n === 1:
      parser = apply(x, value => <[Item]>[value])
      break
    default:
      parser = apply(seq(x, repn(n - 1, kright(s, x))), applyList)
      break
  }

  return <ListNParser<T, N, Item>>parser
}

export default listn
