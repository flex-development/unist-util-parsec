/**
 * @file Type Tests - OneOrMany
 * @module unist-util-parsec/types/tests/unit-d/OneOrMany
 */

import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../one-or-many'

describe('unit-d:types/OneOrMany', () => {
  type T = Literal | Node | Parent
  type Subject = TestSubject<T>

  it('should extract T', () => {
    expectTypeOf<Subject>().extract<T>().not.toBeNever()
  })

  it('should extract T[]', () => {
    expectTypeOf<Subject>().extract<T[]>().not.toBeNever()
  })

  it('should extract readonly T[]', () => {
    expectTypeOf<Subject>().extract<readonly T[]>().not.toBeNever()
  })
})
