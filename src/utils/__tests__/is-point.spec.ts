/**
 * @file Unit Tests - isPoint
 * @module unist-util-parsec/utils/tests/unit/isPoint
 */

import type { Point } from '#src/interfaces'
import testSubject from '../is-point'

describe('unit:utils/isPoint', () => {
  it('should return false if `value` is not point like', () => {
    expect(testSubject(null)).to.be.false
  })

  it('should return true if `value` is point like', () => {
    // Arrange
    const value: Point = {
      column: faker.number.int(),
      line: faker.number.int(),
      offset: faker.number.int()
    }

    // Act + Expect
    expect(testSubject(value)).to.be.true
  })
})
