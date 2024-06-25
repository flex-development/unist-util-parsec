/**
 * @file Type Aliases - Position
 * @module unist-util-parsec/types/Position
 */

import type Point from './point'

/**
 * Range between two points in a source [*file*][file].
 *
 * [file]: https://github.com/syntax-tree/unist#file
 */
interface Position {
  /**
   * Place of last character in range.
   *
   * @see {@linkcode Point}
   */
  end: Point

  /**
   * Place of first character in range.
   *
   * @see {@linkcode Point}
   */
  start: Point
}

export type { Position as default }
