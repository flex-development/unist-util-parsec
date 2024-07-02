/**
 * @file Unit Tests - listn
 * @module unist-util-parsec/combinators/tests/unit/listn
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import type { PunctuatorToken } from '#tests/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../listn'
import tok from '../tok'
import val from '../val'

describe('unit:combinators/listn', () => {
  describe('parser', () => {
    let x: Parser<TokenType, Token<tt.number>>
    let s: Parser<TokenType, PunctuatorToken>

    beforeAll(() => {
      x = tok(tt.number)
      s = val<tt.punctuator>(chars.comma)
    })

    it('should fail if `x` fails (n === 1)', () => {
      // Act
      const output = testSubject(1, x, s).parse()

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should fail if `x` fails (n > 1)', () => {
      // Act
      const output = testSubject(faker.number.int({ min: 2 }), x, s).parse()

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed with tuple result if `x` succeeds (n === 1)', () => {
      // Arrange
      const lexer: Lexer = new Lexer('5, 4, 3, 2, 1')

      // Act
      const output = testSubject(1, x, s).parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.head.next?.next)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate?.result).to.eql([lexer.head.next])
    })

    it('should succeed with tuple result if `x` succeeds (n > 1)', () => {
      // Arrange
      const lexer: Lexer = new Lexer('3, 2, 1')
      const n: number = 3

      // Act
      const output = testSubject(n, x, s).parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate).to.have.property('result').be.of.length(n)
      expect(output.candidate?.result).to.each.satisfy((token: Token) => {
        return token.type === tt.number
      })
    })

    it('should succeed without consuming token if n < 1', () => {
      // Arrange
      const lexer: Lexer = new Lexer('')

      // Act
      const output = testSubject(0, x, s).parse(lexer.head)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head)
      expect(output.candidate).to.have.property('next', lexer.head)
      expect(output.candidate).to.have.deep.property('result', [])
    })
  })
})
