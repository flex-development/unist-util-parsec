/**
 * @file Unit Tests - errf
 * @module unist-util-parsec/combinators/tests/unit/errf
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../errf'
import tok from '../tok'

describe('unit:combinators/errf', () => {
  describe('parser', () => {
    let message: string
    let subject: Parser<TokenType, Token | null>
    let token: Token

    beforeAll(() => {
      token = new Lexer('1').head
      subject = testSubject(tok(tt.number), null, message = 'unexpected')
    })

    it('should succeed and replace error message if `x` fails', () => {
      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('result').be.null
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
