/**
 * @file Unit Tests - seq
 * @module unist-util-parsec/combinators/tests/unit/seq
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../seq'
import tok from '../tok'

describe('unit:combinators/seq', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, [Token, Token, Token]>

    beforeAll(() => {
      subject = testSubject(tok(tt.sof), tok(tt.number), tok(tt.eof))
    })

    it('should fail if any parser fails', () => {
      // Arrange
      const token: Token = new Lexer('a').head

      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed if all parsers succeed', () => {
      // Act
      const output = subject.parse(new Lexer('3').head)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate!.result).to.be.an('array').of.length(3)
    })
  })
})
