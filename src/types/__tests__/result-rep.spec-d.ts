/**
 * @file Type Tests - RepResult
 * @module unist-util-parsec/types/tests/unit-d/RepResult
 */

import type { EmptyArray } from '@flex-development/tutils'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../result-rep'

describe('unit-d:types/RepResult', () => {
  type R = Literal | Node | Parent
  type Subject = TestSubject<R>

  it('should extract []', () => {
    expectTypeOf<Subject>().extract<EmptyArray>().not.toBeNever()
  })

  it('should extract [R, ...R[]]', () => {
    expectTypeOf<Subject>().extract<[R, ...R[]]>().not.toBeNever()
  })
})
