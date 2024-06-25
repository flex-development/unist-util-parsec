/**
 * @file Unit Tests - nil
 * @module unist-util-parsec/combinators/tests/unit/nil
 */

import tt from '#fixtures/tt'
import type {
  ParseCandidate,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { TokenType } from '#src/types'
import testSubject from '../nil'

describe('unit:combinators/nil', () => {
  describe('parser', () => {
    let output: SucceededParserOutput<TokenType, undefined>
    let token: Token

    beforeAll(() => {
      token = {
        end: { column: 2, line: 1, offset: 1 },
        start: { column: 1, line: 1, offset: 0 },
        type: tt.number,
        value: faker.number.int({ max: 9, min: 0 }).toString()
      }

      output = testSubject().parse(token)
    })

    it('should succeed without consuming token', () => {
      expect(output.successful).to.be.true
      expect(output.error).to.be.undefined
      expect(output.candidates).to.be.an('array').of.length(1)
      expect(output.candidates).to.each.satisfy((candidate: ParseCandidate) => {
        const { head, next, result } = candidate
        return token === head && head === next && result === undefined
      })
    })
  })
})
