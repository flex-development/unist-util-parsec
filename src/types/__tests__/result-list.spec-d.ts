/**
 * @file Type Tests - ListResult
 * @module unist-util-parsec/types/tests/unit-d/ListResult
 */

import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../result-list'

describe('unit-d:types/ListResult', () => {
  type R = Literal | Node | Parent

  it('should extract [R, ...R[]]', () => {
    expectTypeOf<TestSubject<R>>().extract<[R, ...R[]]>().not.toBeNever()
  })
})
