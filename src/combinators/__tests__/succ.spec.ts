/**
 * @file Unit Tests - succ
 * @module unist-util-parsec/combinators/tests/unit/succ
 */

import type {
  ParseCandidate,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type { TokenType } from '#src/types'
import { isParseCandidate } from '#tests/utils'
import { tt } from '@flex-development/esast-util-from-code'
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
      expect(output.candidate).to.satisfy(isParseCandidate)
      expect(output.candidate).to.satisfy((candidate: ParseCandidate) => {
        return (
          candidate.head === token &&
          candidate.next === token &&
          candidate.result === result
        )
      })
    })
  })
})
