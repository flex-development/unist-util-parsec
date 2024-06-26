/**
 * @file Type Tests - SucceededParserOutput
 * @module unist-util-parsec/interfaces/tests/unit-d/SucceededParserOutput
 */

import type { ParseError } from '#src/errors'
import type { TokenType } from '#src/types'
import type { Nilable } from '@flex-development/tutils'
import type ParseCandidate from '../parse-candidate'
import type TestSubject from '../parser-output-succeeded'

describe('unit-d:interfaces/SucceededParserOutput', () => {
  type T = TokenType
  type R = unknown
  type Subject = TestSubject<T, R>

  it('should match [candidate: ParseCandidate<T, R>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('candidate')
      .toEqualTypeOf<ParseCandidate<T, R>>()
  })

  it('should match [error?: ParseError | null | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('error')
      .toEqualTypeOf<Nilable<ParseError>>()
  })

  it('should match [successful: true]', () => {
    expectTypeOf<Subject>().toHaveProperty('successful').toEqualTypeOf<true>()
  })
})
