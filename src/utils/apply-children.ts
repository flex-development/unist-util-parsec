/**
 * @file Utilities - applyChildren
 * @module unist-util-parsec/utils/applyChildren
 */

import type { Token } from '#src/interfaces'
import type { ApplyNode, InitChildren } from '#src/types'
import type { Children, Match, Type } from '@flex-development/unist-util-types'
import type { Node, Parent } from 'unist'
import isToken from './is-token'

/**
 * Create a child node array.
 *
 * > 👉 An array initializer can have a maximum depth of `5`.
 *
 * @see {@linkcode ApplyNode}
 * @see {@linkcode Children}
 * @see {@linkcode InitChildren}
 *
 * @template {ApplyNode} N - Parent node
 *
 * @param {InitChildren<N>} init - Initializer
 * @return {Children<N>} New child node array
 */
function applyChildren<N extends ApplyNode>(init: InitChildren<N>): Children<N>

/**
 * Create a child node array.
 *
 * > 👉 An array initializer can have a maximum depth of `5`.
 *
 * @see {@linkcode Children}
 * @see {@linkcode InitChildren}
 * @see {@linkcode Node}
 *
 * @template {Node} N - Parent node
 *
 * @param {InitChildren<N>} init - Initializer
 * @return {Children<N>} New child node array
 */
function applyChildren<N extends Node>(init: InitChildren<N>): Children<N>

/**
 * Create a child node array.
 *
 * > 👉 An array initializer can have a maximum depth of `5`.
 *
 * @see {@linkcode ApplyNode}
 * @see {@linkcode Children}
 * @see {@linkcode InitChildren}
 * @see {@linkcode Match}
 * @see {@linkcode Type}
 *
 * @template {Type<ApplyNode>} T - Node type
 *
 * @param {InitChildren<Match<ApplyNode, T>>} init - Initializer
 * @return {Children<Match<ApplyNode, T>>} New child node array
 */
function applyChildren<
  T extends Type<ApplyNode>
>(init: InitChildren<Match<ApplyNode, T>>): Children<Match<ApplyNode, T>>

/**
 * Create a child node array.
 *
 * > 👉 An array initializer can have a maximum depth of `5`.
 *
 * @see {@linkcode Children}
 * @see {@linkcode InitChildren}
 * @see {@linkcode Parent}
 *
 * @param {InitChildren} init - Initializer
 * @return {Children<Parent>} New child node array
 */
function applyChildren(init: InitChildren): Children<Parent> {
  return [init].flat(6).filter((value?: Node | Token | null): value is Node => {
    return !!value && !isToken(value)
  })
}

export default applyChildren
