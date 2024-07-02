/**
 * @file Unit Tests - applyLrec
 * @module unist-util-parsec/utils/tests/unit/applyLrec
 */

import type { ApplyCallback, RepResult, TokenRange } from '#src/types'
import testSubject from '../apply-lrec'

describe('unit:utils/applyLrec', () => {
  describe('callback', () => {
    let value: [number, RepResult<[number, TokenRange]>]
    let subject: ApplyCallback<typeof value, number>

    beforeAll(() => {
      value = [20, [[0, []], [3, []], [4, []]]]
      subject = testSubject((acc: number, num: number): number => acc - num)
    })

    it('should return recursive left-associative result', () => {
      expect(subject(value, [])).to.eq(13)
    })
  })
})
