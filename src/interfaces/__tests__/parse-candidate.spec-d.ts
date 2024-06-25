/**
 * @file Type Tests - ParseCandidate
 * @module unist-util-parsec/interfaces/tests/unit-d/ParseCandidate
 */

import type { TokenType } from '#src/types'
import type { Optional } from '@flex-development/tutils'
import type TestSubject from '../parse-candidate'
import type Token from '../token'

describe('unit-d:interfaces/ParseCandidate', () => {
  type T = TokenType
  type R = unknown
  type Subject = TestSubject<T, R>

  it('should match [head: Token<T> | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('head')
      .toEqualTypeOf<Optional<Token>>()
  })

  it('should match [next: Token | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('next')
      .toEqualTypeOf<Optional<Token>>()
  })

  it('should match [result: R]', () => {
    expectTypeOf<Subject>().toHaveProperty('result').toEqualTypeOf<R>()
  })
})
