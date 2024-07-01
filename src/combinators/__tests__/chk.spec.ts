/**
 * @file Unit Tests - chk
 * @module unist-util-parsec/combinators/tests/unit/chk
 */

import eof from '#fixtures/token-eof'
import { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { tt } from '@flex-development/esast-util-from-code'
import testSubject from '../chk'
import tok from '../tok'

describe('unit:combinators/chk', () => {
  describe('parser', () => {
    it('should fail if `x` fails', () => {
      // Act
      const output = testSubject(tok<TokenType>(tt.number)).parse(eof)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', eof)
    })

    it('should succeed without consuming token if `x` succeeds', () => {
      // Act
      const output = testSubject(tok(tt.eof)).parse(eof)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === eof &&
          candidate.next === eof &&
          candidate.result === eof
        )
      })
    })
  })
})
