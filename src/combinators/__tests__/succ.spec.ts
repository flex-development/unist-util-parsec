/**
 * @file Unit Tests - succ
 * @module unist-util-parsec/combinators/tests/unit/succ
 */

import tt from '#fixtures/tt'
import type {
  ParseCandidate,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { TokenType } from '#src/types'
import testSubject from '../succ'

describe('unit:combinators/succ', () => {
  describe('parser', () => {
    let output: SucceededParserOutput<TokenType, number>
    let result: number
    let token: Token & { value: string }

    beforeAll(() => {
      token = {
        end: { column: 8, line: 1, offset: 7 },
        start: { column: 7, line: 1, offset: 6 },
        type: tt.number,
        value: faker.number.int({ max: 9, min: 0 }).toString()
      }

      result = Number.parseInt(token.value)
      output = testSubject(result).parse(token)
    })

    it('should succeed without consuming token', () => {
      expect(output.successful).to.be.true
      expect(output.error).to.be.undefined
      expect(output.candidates).to.be.an('array').of.length(1)
      expect(output.candidates).to.each.satisfy((candidate: ParseCandidate) => {
        return (
          token === candidate.head &&
          candidate.head === candidate.next &&
          candidate.result === result
        )
      })
    })
  })
})
