/**
 * @file Unit Tests - lrec
 * @module unist-util-parsec/combinators/tests/unit/lrec
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import apply from '../apply'
import kright from '../kright'
import testSubject from '../lrec'
import tok from '../tok'
import val from '../val'

describe('unit:combinators/lrec', () => {
  describe('parser', () => {
    let number: Parser<TokenType, number>
    let subject: Parser<TokenType, number>

    beforeAll(() => {
      number = apply(tok(tt.number), token => +token.value!)

      subject = testSubject(number, kright(val(chars.minus), number), (
        acc,
        num
      ) => acc - num)
    })

    it('should fail if `p` fails', () => {
      // Act
      const output = subject.parse(new Lexer(chars.lowercaseA).head)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed with result of `p` if `q` succeeds 0 times', () => {
      // Arrange
      const lexer: Lexer = new Lexer(chars.digit0)

      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result', +chars.digit0)
    })

    it('should succeed with recursive left-associative result', () => {
      // Arrange
      const lexer: Lexer = new Lexer('0 - 1 - 2')

      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result', -3)
    })
  })
})
