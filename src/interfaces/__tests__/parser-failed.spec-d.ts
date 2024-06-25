/**
 * @file Type Tests - FailedParser
 * @module unist-util-parsec/interfaces/tests/unit-d/FailedParser
 */

import type { TokenType } from '#src/types'
import type Parser from '../parser'
import type TestSubject from '../parser-failed'
import type FailedParserOutput from '../parser-output-failed'
import type Token from '../token'

describe('unit-d:interfaces/FailedParser', () => {
  it('should extend Parser<T, never>', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parser<TokenType, never>>()
  })

  describe('parse', () => {
    describe('parameters', () => {
      it('should be callable with [Token<T>?]', () => {
        expectTypeOf<TestSubject>()
          .toHaveProperty('parse')
          .parameters
          .toEqualTypeOf<[Token?]>()
      })
    })

    describe('returns', () => {
      it('should return FailedParserOutput<T>', () => {
        expectTypeOf<TestSubject>()
          .toHaveProperty('parse')
          .returns
          .toEqualTypeOf<FailedParserOutput>()
      })
    })
  })
})
