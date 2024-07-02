/**
 * @file Utilities - applyPosition
 * @module unist-util-parsec/utils/applyPosition
 */

import type { TokenRange } from '#src/types'
import type { Node, Parent } from 'unist'

/**
 * Set the position of `node` based on token `range` or its children.
 *
 * > 👉 Does nothing under the following conditions:
 * >
 * > - `range` does not include two tokens (range based position)
 * > - `node` is not a [*parent*][parent] (children-based position)
 * > - the [*head*][head] or [*tail*][tail] of `node` is
 * >   [*generated*][generated] (children-based position)
 *
 * [generated]: https://github.com/syntax-tree/unist#generated
 * [head]: https://github.com/syntax-tree/unist#head
 * [parent]: https://github.com/syntax-tree/unist#parent
 * [tail]: https://github.com/syntax-tree/unist#tail
 *
 * @see {@linkcode Node}
 * @see {@linkcode Parent}
 * @see {@linkcode TokenRange}
 *
 * @template {Node | Parent} T - Node to position
 *
 * @param {T} node - Node to position
 * @param {(TokenRange | null)?} [range] - Token range of `node`
 * @param {(boolean | null)?} [reverse] - Use reverse positioning logic when
 * setting position based on token range
 * @return {T} `node`
 */
function applyPosition<T extends Node | Parent>(
  node: T,
  range?: TokenRange | null,
  reverse?: boolean | null
): T {
  if (!node.position) {
    if (range) {
      const [head, tail] = range

      if (head && tail) {
        if (reverse && head.previous) {
          node.position = { end: tail.start, start: head.previous.end }
        } else if (tail.previous) {
          node.position = { end: tail.previous.end, start: head.start }
        }
      }

      if (!node.position && 'children' in node) node = applyPosition(node)
    } else if ('children' in node) {
      /**
       * Head of node.
       *
       * @const {Node | undefined} head
       */
      const head: Node | undefined = node.children[0]

      /**
       * Tail of node.
       *
       * @const {Node | undefined} tail
       */
      const tail: Node | undefined = node.children.at(-1)

      if (head && tail && head.position && tail.position) {
        node.position = { end: tail.position.end, start: head.position.start }
      }
    }
  }

  return node
}

export default applyPosition
