/**
 * @file Combinators - node
 * @module unist-util-parsec/combinators/node
 */

import type { Parser } from '#src/interfaces'
import type {
  ApplyCallback,
  ApplyNode,
  Builder,
  InitChildren,
  TokenRange,
  TokenType as TT
} from '#src/types'
import { applyChildren, applyPosition } from '#src/utils'
import { u } from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import { ok } from 'devlop'
import type { Node } from 'unist'
import apply from './apply'

/**
 * Parse an occurrence of `p`, and transform the result with `f` to build a
 * node of the specified `type`.
 *
 * The callback receives the value of `p` and should return a child node array,
 * properties object, or value that can be passed to {@linkcode u}.
 *
 * The following types can be used as builder values:
 *
 * - `bigint`
 * - `boolean`
 * - `number`
 * - `string`
 * - `null`
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Returning `undefined` from `f` will create a void node.
 *
 * The node will be positioned using the current token range, or its children.
 *
 * Fails if `p` fails.
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode ApplyNode}
 * @see {@linkcode Builder}
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 * @see {@linkcode Type}
 *
 * @template {Type<ApplyNode>} T - Node type
 * @template {any} [V=any] - Apply callback value
 * @template {TokenRange} [R=TokenRange] - Token range
 *
 * @param {T} type - Node type
 * @param {Parser<TT, V>} p - Parser to apply
 * @param {ApplyCallback<V, Builder<T> | undefined, R>} f - Apply callback
 * @return {Parser<TT, Match<ApplyNode, T>>} Applicative node parser
 */
function node<
  T extends Type<ApplyNode>,
  V,
  R extends TokenRange = TokenRange
>(
  type: T,
  p: Parser<TT, V>,
  f: ApplyCallback<V, Builder<T> | undefined, R>
): Parser<TT, Match<ApplyNode, T>>

/**
 * Parse an occurrence of `p`, and transform the result with `f` to build a
 * node of the specified `type`.
 *
 * The callback receives the value of `p` and should return a child node array,
 * properties object, or value that can be passed to {@linkcode u}.
 *
 * The following types can be used as builder values:
 *
 * - `bigint`
 * - `boolean`
 * - `number`
 * - `string`
 * - `null`
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Returning `undefined` from `f` will create a void node.
 *
 * The node will be positioned using the current token range, or its children.
 *
 * Fails if `p` fails.
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode Builder}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 * @see {@linkcode Type}
 *
 * @template {Node} N - Node to build
 * @template {any} V - Apply callback value
 * @template {TokenRange} R - Token range
 *
 * @param {Type<N>} type - Node type
 * @param {Parser<TT, V>} p - Parser to apply
 * @param {ApplyCallback<V, Builder<Type<N>> | undefined, R>} f - Apply callback
 * @return {Parser<TT, N>} Applicative node parser
 */
function node<N extends Node, V = any, R extends TokenRange = TokenRange>(
  type: Type<N>,
  p: Parser<TT, V>,
  f: ApplyCallback<V, Builder<Type<N>> | undefined, R>
): Parser<TT, N>

/**
 * Parse an occurrence of `p`, and use the result to build a parent node of the
 * specified `type`.
 *
 * > 👉 The value of `p` should be compatible with {@linkcode applyChildren}.
 *
 * The node will be positioned using the current token range, or its children.
 *
 * Fails if `p` fails.
 *
 * @see {@linkcode ApplyNode}
 * @see {@linkcode InitChildren}
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode Type}
 *
 * @template {Type<ApplyNode>} T - Node children
 * @template {InitChildren<Match<ApplyNode, T>>} V - Parent node builder
 *
 * @param {Type<N>} type - Node type
 * @param {Parser<TT, V>} p - Parser to apply
 * @return {Parser<TT, Match<ApplyNode, T>>} Applicative node parser
 */
function node<
  T extends Type<ApplyNode>,
  V extends InitChildren<Match<ApplyNode, T>>
>(type: T, p: Parser<TT, V>): Parser<TT, Match<ApplyNode, T>>

/**
 * Parse an occurrence of `p`, and use the result to build a parent node of the
 * specified `type`.
 *
 * > 👉 The value of `p` should be compatible with {@linkcode applyChildren}.
 *
 * The node will be positioned using the current token range, or its children.
 *
 * Fails if `p` fails.
 *
 * @see {@linkcode InitChildren}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode Type}
 *
 * @template {Node} N - Node to build
 * @template {InitChildren<N>} [V=InitChildren<N>] - Apply callback value
 *
 * @param {Type<N>} type - Node type
 * @param {Parser<TT, V>} p - Parser to apply
 * @return {Parser<TT, N>} Applicative node parser
 */
function node<N extends Node, V extends InitChildren<N> = InitChildren<N>>(
  type: Type<N>,
  p: Parser<TT, V>
): Parser<TT, N>

/**
 * Parse an occurrence of `p`, and transform the result with `f`.
 *
 * The callback should return a new node. If not positioned, the new node will
 * be [*generated*][generated].
 *
 * Fails if `p` fails.
 *
 * [generated]: https://github.com/syntax-tree/unist#generated
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode ApplyNode}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 *
 * @template {ApplyNode} N - Node to build
 * @template {any} [V=any] - Apply callback value
 * @template {TokenRange} [R=TokenRange] - Token range
 *
 * @param {Parser<TT, V>} p - Parser to apply
 * @param {ApplyCallback<V, N, R>} f - Apply callback
 * @return {Parser<TT, N>} Applicative node parser
 */
function node<N extends ApplyNode, V = any, R extends TokenRange = TokenRange>(
  p: Parser<TT, V>,
  f: ApplyCallback<V, N, R>
): Parser<TT, N>

/**
 * Parse an occurrence of `p`, and transform the result with `f`.
 *
 * The callback should return a new node. If not positioned, the new node will
 * be [*generated*][generated].
 *
 * Fails if `p` fails.
 *
 * [generated]: https://github.com/syntax-tree/unist#generated
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 *
 * @template {Node} N - Node to build
 * @template {any} [V=any] - Apply callback value
 * @template {TokenRange} [R=TokenRange] - Token range
 *
 * @param {Parser<TT, V>} p - Parser to apply
 * @param {ApplyCallback<V, N, R>} f - Apply callback
 * @return {Parser<TT, N>} Applicative node parser
 */
function node<N extends Node, V = any, R extends TokenRange = TokenRange>(
  p: Parser<TT, V>,
  f: ApplyCallback<V, N, R>
): Parser<TT, N>

/**
 * Build a node.
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode Builder}
 * @see {@linkcode Node}
 * @see {@linkcode Parser}
 * @see {@linkcode Type}
 *
 * @param {Parser | Type} x - Parser to apply or node type
 * @param {ApplyCallback<any, Node> | Parser} p - Apply callback or parser
 * @param {ApplyCallback<any, Builder | undefined>?} f - Apply callback
 * @return {Parser<TT, Node>} Applicative node parser
 */
function node(
  x: Parser | Type,
  p: ApplyCallback<any, Node> | Parser,
  f?: ApplyCallback<any, Builder | undefined>
): Parser<TT, Node> {
  if (typeof x === 'object' && typeof p === 'function') return apply(x, p)

  ok(typeof x === 'string', 'expected node type')
  ok(typeof p === 'object' && 'parse' in p, 'expected parser')

  return apply<TT, any, Node>(p, (value, range) => {
    return applyPosition(
      typeof f === 'function'
        ? u(x, <never>f(value, range))
        : u(x, applyChildren(<never>value)),
      range
    )
  })
}

export default node
