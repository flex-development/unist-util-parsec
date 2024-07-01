/**
 * @file Combinators - opt
 * @module unist-util-parsec/combinators/opt
 */

import type { Parser, SucceededParser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import alt from './alt'
import succ from './succ'

/**
 * Optionally consume `x`.
 *
 * Equivalent to `x | nil<K>()`.
 *
 * Results in `Rx | undefined`, with `undefined` only returned if `x` fails.
 *
 * Never fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode SucceededParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenKind} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @return {SucceededParser<T, R>} Optional parser
 */
function opt<T extends TokenType, R>(
  x: Parser<T, R>
): SucceededParser<T, R | undefined> {
  return <SucceededParser<T, R | undefined>>alt(x, succ())
}

export default opt
