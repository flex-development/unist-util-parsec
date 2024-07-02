/**
 * @file Type Aliases - ApplyNode
 * @module unist-util-parsec/types/ApplyNode
 */

import type { node } from '#src/combinators'
import type { ApplyNodeMap } from '#src/interfaces'

/**
 * Union of nodes that can be built using {@linkcode node}.
 *
 * To register custom nodes, augment {@linkcode ApplyNode}. They will be added
 * to this union automatically.
 */
type ApplyNode = ApplyNodeMap[keyof ApplyNodeMap]

export type { ApplyNode as default }
