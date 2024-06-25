/**
 * @file Type Tests - Parser
 * @module unist-util-parsec/interfaces/tests/unit-d/Parser
 */

import type { ParserOutput, TokenType } from '#src/types'
import type TestSubject from '../parser'
import type Token from '../token'

describe('unit-d:interfaces/Parser', () => {
  type T = TokenType
  type R = unknown
  type Subject = TestSubject<T, R>

  describe('parse', () => {
    describe('parameters', () => {
      it('should be callable with [Token<T>?]', () => {
        expectTypeOf<Subject>()
          .toHaveProperty('parse')
          .parameters
          .toEqualTypeOf<[Token?]>()
      })
    })

    describe('returns', () => {
      it('should return ParserOutput<T, R>', () => {
        expectTypeOf<Subject>()
          .toHaveProperty('parse')
          .returns
          .toEqualTypeOf<ParserOutput<T, R>>()
      })
    })
  })
})
