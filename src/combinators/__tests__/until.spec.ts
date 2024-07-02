/**
 * @file Unit Tests - until
 * @module unist-util-parsec/combinators/tests/unit/until
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import eat from '../eat'
import fail from '../fail'
import tok from '../tok'
import testSubject from '../until'

describe('unit:combinators/until', () => {
  describe('parser', () => {
    let lexer: Lexer
    let u: Parser<tt.eof, Token<tt.eof>>

    beforeAll(() => {
      u = tok(tt.eof)
      lexer = new Lexer('11 12 13')
    })

    it('should fail if `x` fails', () => {
      // Act
      const output = testSubject(fail(), u).parse(lexer.head)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed once occurrence of `u` is reached', () => {
      // Act
      const output = testSubject(eat(), u).parse(lexer.head.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.have.property('head', lexer.head.next)
      expect(output.candidate).to.have.property('next', lexer.tail)
      expect(output.candidate).to.have.property('result').be.an('array')
      expect(output.candidate).to.have.property('result').be.of.length(3)
      expect(output.candidate?.result).to.each.satisfy((token: Token) => {
        return token.type === tt.number
      })
    })
  })
})
