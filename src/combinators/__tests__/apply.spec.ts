/**
 * @file Unit Tests - apply
 * @module unist-util-parsec/combinators/tests/unit/apply
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../apply'
import tok from '../tok'

describe('unit:combinators/apply', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, number>
    let token: Token

    beforeAll(() => {
      token = new Lexer('0').head
      subject = testSubject(tok(tt.number), token => +token.value!)
    })

    it('should fail if `x` fails', () => {
      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed with transformed result if `x` succeeds', () => {
      // Act
      const output = subject.parse(token.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('result').be.a('number')
    })
  })
})
