/**
 * @file Type Tests - ApplyNode
 * @module unist-util-parsec/types/tests/unit-d/ApplyNode
 */

import type { ApplyNodeMap } from '#src/interfaces'
import type TestSubject from '../apply-node'

describe('unit-d:types/ApplyNode', () => {
  it('should equal ApplyNodeMap[keyof ApplyNodeMap]', () => {
    // Arrange
    type Expect = ApplyNodeMap[keyof ApplyNodeMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
