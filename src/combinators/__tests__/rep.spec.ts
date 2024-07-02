/**
 * @file Unit Tests - rep
 * @module unist-util-parsec/combinators/tests/unit/rep
 */

import { ParseError } from '#src/errors'
import type { SucceededParser } from '#src/interfaces'
import type { RepResult, TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../rep'
import tok from '../tok'

describe('unit:combinators/rep', () => {
  describe('parser', () => {
    let lexer: Lexer
    let subject: SucceededParser<TokenType, RepResult<Token>>

    beforeAll(() => {
      lexer = new Lexer('1 2 3')
      subject = testSubject(tok(tt.number))
    })

    it('should succeed with non-empty array if `x` succeeds', () => {
      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate).to.have.property('result').be.of.length(3)
      expect(output.candidate.result).to.each.satisfy((token: Token) => {
        return token.type === tt.number
      })
    })

    it('should succeed without consuming token if `x` fails', () => {
      // Act
      const output = subject.parse(lexer.head)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head)
      expect(output.candidate).to.have.property('next', lexer.head)
      expect(output.candidate).to.have.deep.property('result', [])
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', lexer.head)
    })
  })
})
