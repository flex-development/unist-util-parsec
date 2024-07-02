/**
 * @file Unit Tests - nok
 * @module unist-util-parsec/utils/tests/unit/nok
 */

import { ParseError } from '#src/errors'
import type { Point, Token } from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import testSubject from '../nok'

describe('unit:utils/nok', () => {
  it('should return parse error (no current token)', () => {
    // Act
    const result = testSubject(null)

    // Expect
    expect(result).to.be.instanceof(ParseError)
    expect(result).to.have.property('message', 'Expected token')
  })

  it('should return parse error', () => {
    // Arrange
    const point: Point = { column: 1, line: 1, offset: 0 }
    const token: Token = { end: point, start: point, type: tt.eof, value: null }

    // Act
    const result = testSubject(token)

    // Expect
    expect(result).to.be.instanceof(ParseError)
    expect(result).to.have.property('message', 'Unexpected token')
  })
})
