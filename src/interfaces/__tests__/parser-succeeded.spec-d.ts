/**
 * @file Type Tests - SucceededParser
 * @module unist-util-parsec/interfaces/tests/unit-d/SucceededParser
 */

import type { TokenType } from '#src/types'
import type Parser from '../parser'
import type SucceededParserOutput from '../parser-output-succeeded'
import type TestSubject from '../parser-succeeded'
import type Token from '../token'

describe('unit-d:interfaces/SucceededParser', () => {
  type T = TokenType
  type R = unknown
  type Subject = TestSubject<T, R>

  it('should extend Parser<T, R>', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parser<T, R>>()
  })

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
      it('should return SucceededParserOutput<T, R>', () => {
        expectTypeOf<Subject>()
          .toHaveProperty('parse')
          .returns
          .toEqualTypeOf<SucceededParserOutput<T, R>>()
      })
    })
  })
})
