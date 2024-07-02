/**
 * @file Type Aliases - Builder
 * @module unist-util-parsec/types/Builder
 */

import type { node } from '#src/combinators'
import type * as ub from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type { Node } from 'unist'
import type ApplyNode from './apply-node'

/**
 * Construct a union of {@linkcode node} builders.
 *
 * @see {@linkcode ApplyNode}
 * @see {@linkcode Match}
 * @see {@linkcode Node}
 * @see {@linkcode Type}
 * @see {@linkcode ub.AnyBuilder}
 * @see {@linkcode ub.Builder}
 * @see {@linkcode ub.BuilderValue}
 *
 * @template {Type} [T=Type<ApplyNode>] - Node type
 */
// dprint-ignore-start
type Builder<T extends Type = Type<ApplyNode>> = T extends Type<ApplyNode>
  ? ub.Builder<Match<ApplyNode, T>> extends infer B extends ub.AnyBuilder
    ? B extends ub.BuilderValue
      ? B
      : B extends readonly Node[]
        ? never
        : {
            [K in keyof B]: K extends 'children'
              ? B[K] extends infer U extends readonly Node[]
                ? U[number][]
                : never
              : B[K]
          } extends infer H
            ? H | ('children' extends keyof H ? H['children'] : never)
            : never
    : never
  : never
// dprint-ignore-end

export type { Builder as default }
