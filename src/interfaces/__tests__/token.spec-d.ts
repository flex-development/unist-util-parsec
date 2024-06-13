/**
 * @file Type Tests - Token
 * @module unist-util-parsec/interfaces/tests/unit-d/Token
 */

import type { TokenKind, TokenValue } from '#src/types'
import type { ReadonlyKeys } from '@flex-development/tutils'
import type Point from '../point'
import type TestSubject from '../token'

describe('unit-d:interfaces/Token', () => {
  it('should match [end: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('end').toEqualTypeOf<Point>()
  })

  it('should match [readonly kind: K]', () => {
    expectTypeOf<ReadonlyKeys<TestSubject>>().extract<'kind'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<TokenKind>()
  })

  it('should match [next: Token | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('next')
      .toEqualTypeOf<TestSubject | undefined>()
  })

  it('should match [start: Point]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('start').toEqualTypeOf<Point>()
  })

  it('should match [value: TokenValue]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<TokenValue>()
  })
})
