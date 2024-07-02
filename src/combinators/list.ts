/**
 * @file Combinators - list
 * @module unist-util-parsec/combinators/list
 */

import type { Parser } from '#src/interfaces'
import type { ListParser, TokenType } from '#src/types'
import { applyList } from '#src/utils'
import apply from './apply'
import kright from './kright'
import rep from './rep'
import seq from './seq'

/**
 * Parse a list.
 *
 * Results in `[Tx, ...Tx[]]`.
 *
 * Fails if `x` fails.
 *
 * @see {@linkcode ListParser}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} Item - List item parse candidate result
 * @template {any} [Separator=any] - List item separator candidate result
 *
 * @param {Parser<T, Item>} x - List item parser
 * @param {Parser<T, Separator>} s - List separator parser
 * @return {ListParser<T, Item>} List parser
 */
function list<T extends TokenType, Item, Separator = any>(
  x: Parser<T, Item>,
  s: Parser<T, Separator>
): ListParser<T, Item> {
  return apply(seq(x, rep(kright(s, x))), applyList)
}

export default list
