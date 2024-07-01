/**
 * @file Type Tests - CombineCallback
 * @module unist-util-parsec/types/tests/unit-d/CombineCallback
 */

import type { Parser } from '#src/interfaces'
import type TestSubject from '../callback-combine'
import type TokenRange from '../token-range'
import type TokenType from '../token-type'

describe('unit-d:types/CombineCallback', () => {
  type From = string
  type To = number
  type Subject = TestSubject<TokenType, From, To>

  describe('parameters', () => {
    it('should be callable with [From, Range]', () => {
      expectTypeOf<Subject>().parameters.toEqualTypeOf<[From, TokenRange]>()
    })
  })

  describe('returns', () => {
    it('should return Parser<T, To>', () => {
      expectTypeOf<Subject>().returns.toEqualTypeOf<Parser<TokenType, To>>()
    })
  })
})
