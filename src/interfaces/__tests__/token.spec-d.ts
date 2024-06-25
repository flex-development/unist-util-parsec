/**
 * @file Type Tests - Token
 * @module unist-util-parsec/interfaces/tests/unit-d/Token
 */

import type { TokenType, TokenValue } from '#src/types'
import type Position from '../position'
import type TestSubject from '../token'

describe('unit-d:interfaces/Token', () => {
  it('should extend Position', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Position>()
  })

  it('should match [next?: Token | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('next')
      .toEqualTypeOf<TestSubject | undefined>()
  })

  it('should match [previous?: Token | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('previous')
      .toEqualTypeOf<TestSubject | undefined>()
  })

  it('should match [type: T]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<TokenType>()
  })

  it('should match [value: TokenValue]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<TokenValue>()
  })
})
