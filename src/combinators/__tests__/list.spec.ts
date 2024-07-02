/**
 * @file Unit Tests - list
 * @module unist-util-parsec/combinators/tests/unit/list
 */

import { ParseError } from '#src/errors'
import type { Parser } from '#src/interfaces'
import type { ListResult, TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../list'
import tok from '../tok'
import val from '../val'

describe('unit:combinators/list', () => {
  describe('parser', () => {
    let lexer: Lexer
    let subject: Parser<TokenType, ListResult<Token>>

    beforeAll(() => {
      lexer = new Lexer('0, 1, 2')
      subject = testSubject(tok(tt.number), val(chars.comma))
    })

    it('should fail if `x` fails', () => {
      // Act
      const output = subject.parse(lexer.head)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
    })

    it('should succeed with list result if `x` succeeds', () => {
      // Act
      const output = subject.parse(lexer.head.next)

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
