/**
 * @file Unit Tests - out
 * @module unist-util-parsec/utils/tests/unit/out
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import nok from '../nok'
import testSubject from '../out'

describe('utils:out', () => {
  it('should return failed parser output', () => {
    // Act
    const result = testSubject([], false, nok())

    // Expect
    expect(result).to.have.property('error').be.instanceof(ParseError)
    expect(result).to.have.property('successful').be.false
  })

  it('should return succeeded parser output', () => {
    // Arrange
    const candidates: ParseCandidate[] = []

    // Act
    const result = testSubject(candidates, true, null)

    // Expect
    expect(result).to.not.have.property('error')
    expect(result).to.have.property('candidates', candidates)
    expect(result).to.have.property('successful').be.true
  })
})
