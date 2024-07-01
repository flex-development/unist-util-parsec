/**
 * @file Unit Tests - opt
 * @module unist-util-parsec/combinators/tests/unit/opt
 */

import type { ParseCandidate, Token } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { keywords, tt } from '@flex-development/esast-util-from-code'
import testSubject from '../opt'
import tok from '../tok'

describe('unit:combinators/opt', () => {
  describe('parser', () => {
    let token: Token

    beforeAll(() => {
      token = {
        end: { column: 9, line: 1, offset: 8 },
        start: { column: 5, line: 1, offset: 4 },
        type: tt.keyid,
        value: keywords.null
      }
    })

    it('should succeed if `x` fails', () => {
      // Act
      const output = testSubject(tok<TokenType>(tt.number)).parse(token)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === token &&
          candidate.next === token &&
          candidate.result === undefined
        )
      })
    })

    it('should succeed if `x` succeeds', () => {
      // Act
      const output = testSubject(tok<TokenType>(tt.keyid)).parse(token)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === token &&
          candidate.next === token.next &&
          candidate.result === token
        )
      })
    })
  })
})
