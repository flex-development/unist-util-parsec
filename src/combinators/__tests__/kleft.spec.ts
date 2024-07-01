/**
 * @file Unit Tests - kleft
 * @module unist-util-parsec/combinators/tests/unit/kleft
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../kleft'
import tok from '../tok'
import val from '../val'

describe('unit:combinators/kleft', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, Token>

    beforeAll(() => {
      subject = testSubject(tok(tt.number), val(chars.comma))
    })

    it('should fail if any parser fails', () => {
      // Arrange
      const lexer: Lexer = new Lexer(chars.digit1)

      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed with left biased result', () => {
      // Arrange
      const lexer: Lexer = new Lexer(chars.digit1 + chars.comma)

      // Act
      const output = subject.parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result', lexer.head.next)
    })
  })
})
