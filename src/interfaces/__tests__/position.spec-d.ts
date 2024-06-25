/**
 * @file Type Tests - Position
 * @module unist-util-parsec/interfaces/tests/unit-d/Position
 */

import type Point from '../point'
import type TestSubject from '../position'

describe('unit-d:interfaces/Position', () => {
  it('should match [end: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<Point>()
  })

  it('should match [start: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('start').toEqualTypeOf<Point>()
  })
})
