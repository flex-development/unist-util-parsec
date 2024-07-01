/**
 * @file Type Tests - RepNResult
 * @module unist-util-parsec/types/tests/unit-d/RepNResult
 */

import type TestSubject from '../result-repn'
import type Times from '../times'

describe('unit-d:types/RepNResult', () => {
  type N = 13
  type R = number

  it('should equal Times<N, R>', () => {
    expectTypeOf<TestSubject<N, R>>().toEqualTypeOf<Times<N, R>>()
  })
})
