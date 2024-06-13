/**
 * @file Interfaces - Point
 * @module unist-util-parsec/interfaces/Point
 */

import type { Offset } from '@flex-development/unist-util-types'
import type * as unist from 'unist'

/**
 * One place in a source [*file*][file].
 *
 * [file]: https://github.com/syntax-tree/unist#file
 *
 * @see {@linkcode unist.Point}
 *
 * @extends {Required<unist.Point>}
 */
interface Point extends Required<unist.Point> {
  /**
   * Index of character in source file (`0`-indexed integer).
   *
   * @see {@linkcode Offset}
   */
  offset: Offset
}

export type { Point as default }
