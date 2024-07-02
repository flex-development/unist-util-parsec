/**
 * @file Unit Tests - result
 * @module unist-util-parsec/utils/tests/unit/result
 */

import { ParseError } from '#src/errors'
import type { SucceededParserOutput } from '#src/interfaces'
import type { TokenType } from '#src/types'
import testSubject from '../result'

describe('unit:utils/result', () => {
  it('should return parse candidate result if output is successful', () => {
    // Arrange
    const output: SucceededParserOutput<TokenType, null> = {
      candidate: { head: undefined, next: undefined, result: null },
      successful: true
    }

    // Act + Expect
    expect(testSubject(output)).to.eq(output.candidate.result)
  })

  it('should throw on failed output', () => {
    expect(() => {
      void testSubject({ error: new ParseError(), successful: false })
    }).to.throw(ParseError)
  })
})
