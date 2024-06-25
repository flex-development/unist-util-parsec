/**
 * @file Unit Tests - val
 * @module unist-util-parsec/combinators/tests/unit/val
 */

import tt from '#fixtures/tt'
import type { ParseCandidate, Parser, Point, Token } from '#src/interfaces'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../val'

describe('unit:combinators/val', () => {
  describe('parser', () => {
    let end: Point
    let start: Point
    let subject: Parser

    beforeAll(() => {
      end = { column: 40, line: 11, offset: 308 }
      start = { column: 39, line: 11, offset: 207 }

      subject = testSubject(chars.leftParen)
    })

    it('should fail on token value mismatch', () => {
      // Arrange
      const token: Token<tt.punctuator> = {
        end,
        start,
        type: tt.punctuator,
        value: chars.leftBracket
      }

      // Act + Expect
      expect(subject.parse(token)).to.have.property('successful').be.false
    })

    it('should succeed on token value match', () => {
      // Arrange
      const token: Token<tt.punctuator> = {
        end,
        start,
        type: tt.punctuator,
        value: chars.leftParen
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
