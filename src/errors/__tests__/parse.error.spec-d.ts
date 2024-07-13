/**
 * @file Type Tests - ParseError
 * @module unist-util-parsec/errors/tests/unit-d/ParseError
 */

import type { Position, Token } from '#src/interfaces'
import type { Nilable, RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../parse.error'

describe('unit-d:errors/ParseError', () => {
  it('should extend Error', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Error>()
  })

  it('should match [cause: Token<T> | null | undefined]', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().extract<'cause'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('cause')
      .toEqualTypeOf<Nilable<Token>>
  })

  it('should match [range: Position | null | undefined]', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().extract<'range'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('range')
      .toEqualTypeOf<Nilable<Position>>
  })
})
