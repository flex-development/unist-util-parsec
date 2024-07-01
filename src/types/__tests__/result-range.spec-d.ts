/**
 * @file Type Tests - RangeResult
 * @module unist-util-parsec/types/tests/unit-d/RangeResult
 */

import type { Token } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../result-range'

describe('unit-d:types/RangeResult', () => {
  it('should equal [Result, Range]', () => {
    // Arrange
    type Result = Literal | Node | Parent
    type Range = [Token, Token]

    // Expect
    expectTypeOf<TestSubject<Result, Range>>().toEqualTypeOf<[Result, Range]>()
  })
})
