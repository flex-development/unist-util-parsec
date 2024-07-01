/**
 * @file Unit Tests - lazy
 * @module unist-util-parsec/combinators/tests/unit/lazy
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { Lexer, tt, type Token } from '@flex-development/esast-util-from-code'
import testSubject from '../lazy'
import tok from '../tok'

describe('unit:combinators/lazy', () => {
  describe('parser', () => {
    let subject: Parser<TokenType, Token>
    let token: Token

    beforeAll(() => {
      token = new Lexer('/* i++ */').head
      subject = testSubject(() => tok(tt.comment))
    })

    it('should fail if parser returned by `thunk` fails', () => {
      // Act
      const output = subject.parse(token)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })

    it('should succeed if parser returned by `thunk` succeeds', () => {
      // Act
      const output = subject.parse(token.next)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === token.next &&
          candidate.next === token.next!.next &&
          candidate.result === token.next
        )
      })
    })
  })
})
