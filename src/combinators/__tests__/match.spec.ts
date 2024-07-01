/**
 * @file Unit Tests - match
 * @module unist-util-parsec/combinators/tests/unit/match
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { keywords, tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../match'

describe('unit:combinators/match', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, Token>

    beforeAll(() => {
      subject = testSubject(/^null$/)
    })

    it('should fail if token value does not match pattern', () => {
      // Arrange
      const token: Token = {
        end: { column: 1, line: 1, offset: 0 },
        start: { column: 1, line: 1, offset: 0 },
        type: tt.sof,
        value: chars.lt + 'SOF' + chars.gt
      }

      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed if token value matches pattern', () => {
      // Arrange
      const token: Token = {
        end: { column: 5, line: 1, offset: 4 },
        start: { column: 1, line: 1, offset: 0 },
        type: tt.keyid,
        value: keywords.null
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
