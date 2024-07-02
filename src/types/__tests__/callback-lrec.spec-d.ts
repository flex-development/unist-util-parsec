/**
 * @file Type Tests - LrecCallback
 * @module unist-util-parsec/types/tests/unit-d/LrecCallback
 */

import type {
  AnyBinaryExpression,
  BinaryOperator,
  Expression,
  Nothing
} from '@flex-development/esast'
import type { Type } from '@flex-development/unist-util-types'
import type TestSubject from '../callback-lrec'
import type TokenRange from '../token-range'

describe('unit-d:types/LrecCallback', () => {
  type R = AnyBinaryExpression
  type A = Nothing
  type B = [[BinaryOperator, Type<AnyBinaryExpression>], Expression]
  type Subject = TestSubject<R, A, B>

  describe('parameters', () => {
    it('should be callable with [A | R, B, TokenRange]', () => {
      expectTypeOf<Subject>().parameters.toEqualTypeOf<[A | R, B, TokenRange]>()
    })
  })

  describe('returns', () => {
    it('should return R', () => {
      expectTypeOf<Subject>().returns.toEqualTypeOf<R>()
    })
  })
})
