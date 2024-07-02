/**
 * @file Unit Tests - eat
 * @module unist-util-parsec/combinators/tests/unit/eat
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type { TokenType } from '#src/types'
import type { PunctuatorToken } from '#tests/types'
import { isParseCandidate } from '#tests/utils'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../eat'

describe('unit:combinators/eat', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, Token>

    beforeAll(() => {
      subject = testSubject()
    })

    it('should fail on missing token', () => {
      // Act
      const output = subject.parse()

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', undefined)
    })

    it('should succeed with current token', () => {
      // Arrange
      const token: PunctuatorToken = {
        end: { column: 10, line: 11, offset: 272 },
        start: { column: 9, line: 11, offset: 271 },
        type: tt.punctuator,
        value: chars.dot
      }

      // Act
      const output = subject.parse(token)

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
