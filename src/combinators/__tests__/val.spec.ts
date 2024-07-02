/**
 * @file Unit Tests - val
 * @module unist-util-parsec/combinators/tests/unit/val
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Point, Token } from '#src/interfaces'
import type { PunctuatorToken } from '#tests/types'
import { isParseCandidate } from '#tests/utils'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../val'

describe('unit:combinators/val', () => {
  describe('parser', () => {
    let end: Point
    let start: Point

    beforeAll(() => {
      end = { column: 40, line: 11, offset: 308 }
      start = { column: 39, line: 11, offset: 207 }
    })

    it('should fail on token value mismatch', () => {
      // Arrange
      const token: PunctuatorToken = {
        end,
        start,
        type: tt.punctuator,
        value: chars.leftBracket
      }

      // Act
      const output = testSubject(chars.leftParen).parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it.each<['null' | 'string', () => Token]>([
      ['string', () => ({
        end,
        start,
        type: tt.punctuator,
        value: chars.leftParen
      })],
      ['null', () => ({
        end,
        start,
        type: tt.punctuator,
        value: null
      })]
    ])('should succeed on token value match (%s)', (_, fn) => {
      // Arrange
      const token: Token = fn()

      // Act
      const output = testSubject(token.value).parse(token)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === token &&
          candidate.next === token.next &&
          candidate.result === token
        )
      })
    })
  })
})
