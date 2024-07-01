/**
 * @file Type Tests - ApplyCallback
 * @module unist-util-parsec/types/tests/unit-d/ApplyCallback
 */

import type TestSubject from '../callback-apply'
import type TokenRange from '../token-range'

describe('unit-d:types/ApplyCallback', () => {
  type From = string
  type To = number
  type Subject = TestSubject<From, To>

  describe('parameters', () => {
    it('should be callable with [From, Range]', () => {
      expectTypeOf<Subject>().parameters.toEqualTypeOf<[From, TokenRange]>()
    })
  })

  describe('returns', () => {
    it('should return To', () => {
      expectTypeOf<Subject>().returns.toEqualTypeOf<To>()
    })
  })
})
