/**
 * @file Type Tests - Times
 * @module unist-util-parsec/types/tests/unit-d/Times
 */

import type { Token } from '#src/interfaces'
import type { EmptyArray } from '@flex-development/tutils'
import type TestSubject from '../times'

describe('unit-d:types/Times', () => {
  it('should equal [] if L is 0', () => {
    expectTypeOf<TestSubject<0, Token>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal [] if L is less than 0', () => {
    expectTypeOf<TestSubject<-13, Token>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal [] if L is never', () => {
    expectTypeOf<TestSubject<never, Token>>().toEqualTypeOf<EmptyArray>()
  })

  it('should equal V[] if L is any', () => {
    expectTypeOf<TestSubject<any, Token>>().toEqualTypeOf<Token[]>()
  })

  describe('L extends number', () => {
    it('should construct tuple of length L', () => {
      // Arrange
      type L = Expect['length']
      type Expect = [
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token,
        Token
      ]

      // Expect
      expectTypeOf<TestSubject<L, Token>>().toMatchTypeOf<Expect>()
    })

    it('should equal V[] if number extends L', () => {
      expectTypeOf<TestSubject<number, Token>>().toEqualTypeOf<Token[]>()
    })
  })
})
