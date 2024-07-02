/**
 * @file Type Aliases - InitChildren
 * @module esast-util-from-code/types/InitChildren
 */

import type { Token } from '#src/interfaces'
import type { Node, Parent } from 'unist'
import type OneOrMany from './one-or-many'

/**
 * Construct a union of child node array initializers.
 *
 * @see {@linkcode Node}
 * @see {@linkcode Parent}
 *
 * @template {Node} [T=Parent] - Parent node
 */
type InitChildren<T extends Node = Parent> = T extends Parent
  // dprint-ignore-start
  ? T extends { children: (infer N extends Node)[] }
    ? (
        | (N | Token | null | undefined)[]
        | readonly (N | Token | null | undefined)[]
        | N | Token | null | undefined
      ) extends infer I
      ? (
          | Extract<OneOrMany<readonly (I | null | undefined)[] | I>, any>
          | null
          | undefined
        ) extends infer J
          ? OneOrMany<readonly (J | null | undefined)[] | J>
          : []
      : []
    : []
  : []
// dprint-ignore-end

export type { InitChildren as default }
