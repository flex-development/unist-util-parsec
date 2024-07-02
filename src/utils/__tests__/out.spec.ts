/**
 * @file Unit Tests - out
 * @module unist-util-parsec/utils/tests/unit/out
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import type { TokenType } from '#src/types'
import nok from '../nok'
import testSubject from '../out'

describe('unit:utils/out', () => {
  it('should return failed parser output', () => {
    // Act
    const result = testSubject(false, null, nok())

    // Expect
    expect(result).to.not.have.property('candidate')
    expect(result).to.have.property('error').be.instanceof(ParseError)
    expect(result).to.have.property('successful').be.false
  })

  it('should return succeeded parser output', () => {
    // Arrange
    const candidate: ParseCandidate<TokenType, null> = {
      head: undefined,
      next: undefined,
      result: null
    }

    // Act
    const result = testSubject(true, candidate)

    // Expect
    expect(result).to.not.have.property('error')
    expect(result).to.have.property('candidate', candidate)
    expect(result).to.have.property('successful').be.true
  })
})
