/**
 * @file Unit Tests - condition
 * @module unist-util-parsec/combinators/tests/unit/condition
 */

import type { FailedParser, Parser } from '#src/interfaces'
import type { TokenType } from '#src/types'
import testSubject from '../condition'
import fail from '../fail'
import succ from '../succ'

describe('unit:combinators/condition', () => {
  let a: Parser<TokenType, true>
  let b: FailedParser

  beforeAll(() => {
    a = succ(true)
    b = fail()
  })

  it('should return `a` if `condition` is truthy', () => {
    expect(testSubject(3, a, b)).to.eq(a).and.not.eq(b)
  })

  it('should return `b` if `condition` is falsy', () => {
    expect(testSubject(null, a, b)).to.eq(b).and.not.eq(a)
  })
})
