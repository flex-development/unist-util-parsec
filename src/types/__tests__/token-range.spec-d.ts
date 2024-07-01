/**
 * @file Type Tests - TokenRange
 * @module unist-util-parsec/types/tests/unit-d/TokenRange
 */

import type { Token } from '#src/interfaces'
import type { tt } from '@flex-development/esast-util-from-code'
import type { Optional } from '@flex-development/tutils'
import type TestSubject from '../token-range'

describe('unit-d:types/TokenRange', () => {
  type H = tt.sof
  type U = tt.eof
  type Subject = TestSubject<H, U>

  it('should match [0?: Token<H> | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty(0)
      .toEqualTypeOf<Optional<Token<H>>>()
  })

  it('should match [1?: Token<U> | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty(1)
      .toEqualTypeOf<Optional<Token<U>>>()
  })
})
