/**
 * @file Unit Tests - applyList
 * @module unist-util-parsec/utils/tests/unit/applyList
 */

import testSubject from '../apply-list'

describe('utils:applyList', () => {
  it('should return list result', () => {
    // Arrange
    const value: [number, number[]] = [faker.number.int(), [faker.number.int()]]

    // Act
    const result = testSubject(value)

    // Expect
    expect(result).to.be.an('array').of.length(value.length)
    expect(result).to.have.members(value.flat())
  })
})
