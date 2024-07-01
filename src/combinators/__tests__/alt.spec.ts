/**
 * @file Unit Tests - alt
 * @module unist-util-parsec/combinators/tests/unit/alt
 */

import eof from '#fixtures/token-eof'
import { ParseError } from '#src/errors'
import type { ParseCandidate } from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { tt } from '@flex-development/esast-util-from-code'
import testSubject from '../alt'
import succ from '../succ'
import tok from '../tok'
import val from '../val'

describe('unit:combinators/alt', () => {
  describe('parser', () => {
    it('should fail if all parsers fail', () => {
      // Act
      const output = testSubject(tok<TokenType>(tt.sof), val('')).parse(eof)

      // Expect
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', eof)
    })

    it('should succeed with first successful parser', () => {
      // Act
      const output = testSubject(tok(tt.eof), succ(null)).parse(eof)

      // Expect
      expect(output.successful).to.be.true
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === eof &&
          candidate.next === eof.next &&
          candidate.result === eof
        )
      })
    })
  })
})
