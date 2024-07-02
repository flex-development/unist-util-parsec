/**
 * @file Type Tests - ListNResult
 * @module unist-util-parsec/types/tests/unit-d/ListNResult
 */

import type TestSubject from '../result-listn'
import type Times from '../times'

describe('unit-d:types/ListNResult', () => {
  type N = 3
  type R = number

  it('should equal Times<N, R>', () => {
    expectTypeOf<TestSubject<N, R>>().toEqualTypeOf<Times<N, R>>()
  })
})
