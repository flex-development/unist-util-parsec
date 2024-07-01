/**
 * @file Unit Tests - repn
 * @module unist-util-parsec/combinators/tests/unit/repn
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { RepResult, TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../repn'
import tok from '../tok'

describe('unit:combinators/repn', () => {
  describe('parser', () => {
    let n: number
    let subject: Parser<TokenType, RepResult<Token>>

    beforeAll(() => {
      subject = testSubject(n = 10, tok(tt.number))
    })

    it('should fail if less than `n` occurrences of `x` are parsed', () => {
      // Arrange
      const token: Token = new Lexer('0 1 2 3 4').head

      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed if `n` occurrences of `x` are parsed', () => {
      // Arrange
      const lexer: Lexer = new Lexer('0 1 2 3 4 5 6 7 8 9')

      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate).to.have.property('result').be.of.length(n)
    })
  })
})
