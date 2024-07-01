/**
 * @file Unit Tests - kmid
 * @module unist-util-parsec/combinators/tests/unit/kmid
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../kmid'
import tok from '../tok'

describe('unit:combinators/kmid', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, Token>

    beforeAll(() => {
      subject = testSubject(tok(tt.sof), tok(tt.number), tok(tt.eof))
    })

    it('should fail if any parser fails', () => {
      // Arrange
      const lexer: Lexer = new Lexer('')

      // Act
      const output = subject.parse(lexer.head)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed with middle biased result', () => {
      // Arrange
      const lexer: Lexer = new Lexer(chars.digit3)

      // Act
      const output = subject.parse(lexer.head)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head)
      expect(output.candidate).to.have.property('next', lexer.tail.next)
      expect(output.candidate).to.have.property('result', lexer.head.next)
    })
  })
})
