/**
 * @file Type Tests - Thunk
 * @module unist-util-parsec/types/tests/unit-d/Thunk
 */

import type { Parser, Token } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../thunk'
import type TokenType from '../token-type'

describe('unit-d:types/Thunk', () => {
  type T = Exclude<TokenType, 'eof' | 'sof' | 'whitespace'>
  type R = Literal | Node | Parent
  type Subject = TestSubject<T, R>

  describe('parameters', () => {
    it('should be callable with [(Token<T> | undefined)?]', () => {
      // Arrange
      type Expect = [(Token<T> | undefined)?]

      // Expect
      expectTypeOf<Subject>().parameters.toEqualTypeOf<Expect>()
    })
  })

  describe('returns', () => {
    it('should return Parser<T, R>', () => {
      expectTypeOf<Subject>().returns.toEqualTypeOf<Parser<T, R>>()
    })
  })
})
