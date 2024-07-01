/**
 * @file Unit Tests - combine
 * @module unist-util-parsec/combinators/tests/unit/combine
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../combine'
import seq from '../seq'
import succ from '../succ'
import tok from '../tok'

describe('unit:combinators/combine', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, [Token, Token, Token]>

    beforeAll(() => {
      subject = testSubject(
        tok(tt.sof),
        token => seq(succ(token), tok(tt.keyid)),
        tokens => seq(succ(tokens[0]), succ(tokens[1]), tok(tt.eof))
      )
    })

    it('should fail if any parser fails', () => {
      // Arrange
      const token: Token = new Lexer(faker.string.binary()).head

      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed if all parsers succeed', () => {
      // Act
      const output = subject.parse(new Lexer('token').head)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate!.result).to.be.an('array').of.length(3)
    })
  })
})
