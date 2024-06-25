/**
 * @file Unit Tests - tok
 * @module unist-util-parsec/combinators/tests/unit/tok
 */

import tt from '#fixtures/tt'
import type { ParseCandidate, Parser, Point, Token } from '#src/interfaces'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../tok'

describe('unit:combinators/tok', () => {
  describe('parser', () => {
    let end: Point
    let start: Point
    let subject: Parser

    beforeAll(() => {
      end = { column: 10, line: 11, offset: 272 }
      start = { column: 9, line: 11, offset: 271 }

      subject = testSubject(tt.punctuator)
    })

    it('should fail on token type mismatch', () => {
      // Arrange
      const token: Token<tt.number> = {
        end,
        start,
        type: tt.number,
        value: chars.digit0
      }

      // Act + Expect
      expect(subject.parse(token)).to.have.property('successful').be.false
    })

    it('should succeed on token type match', () => {
      // Arrange
      const token: Token<tt.punctuator> = {
        end,
        start,
        type: tt.punctuator,
        value: chars.dot
      }

      // Act
      const output = subject.parse(token)

      // Expect
      expect(output).to.have.property('successful').be.true
      expect(output.candidates).to.be.an('array').of.length(1)
      expect(output.candidates).to.each.satisfy((candidate: ParseCandidate) => {
        return (
          token === candidate.head &&
          candidate.next === token.next &&
          candidate.result === token
        )
      })
    })
  })
})
