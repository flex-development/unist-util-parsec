/**
 * @file Interfaces - ApplyNodeMap
 * @module unist-util-parsec/interfaces/ApplyNodeMap
 */

import type { node } from '#src/combinators'

/**
 * Registry of nodes that can be built using {@linkcode node}.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface NodeMap {
 *      node: CustomNode
 *    }
 *  }
 */
interface ApplyNodeMap {}

export type { ApplyNodeMap as default }
