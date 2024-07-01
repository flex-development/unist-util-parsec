/**
 * @file Unit Tests - range
 * @module unist-util-parsec/combinators/tests/unit/range
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { RangeResult, TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../range'
import tok from '../tok'

describe('unit:combinators/range', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, RangeResult<Token>>
    let token: Token

    beforeAll(() => {
      token = new Lexer(`'${faker.git.commitSha()}'`).head
      subject = testSubject(tok(tt.string))
    })

    it('should fail if `x` fails', () => {
      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed with range result if `x` succeeds', () => {
      // Act
      const output = subject.parse(token.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate?.result).to.have.property('1').be.an('array')
    })
  })
})
