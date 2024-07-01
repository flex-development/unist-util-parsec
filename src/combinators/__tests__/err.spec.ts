/**
 * @file Unit Tests - err
 * @module unist-util-parsec/combinators/tests/unit/err
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../err'
import tok from '../tok'

describe('unit:combinators/err', () => {
  describe('parser', () => {
    let message: string
    let subject: Parser<TokenType, Token>
    let token: Token

    beforeAll(() => {
      token = new Lexer('1').head
      subject = testSubject(tok(tt.number), message = 'unexpected')
    })

    it('should fail and replace error message if `x` fails', () => {
      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
      expect(output.error).to.have.property('message', message)
    })

    it('should succeed if `x` succeeds', () => {
      // Act
      const output = subject.parse(token.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
    })
  })
})
