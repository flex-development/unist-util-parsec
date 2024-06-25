/**
 * @file Type Tests - FailedParserOutput
 * @module unist-util-parsec/interfaces/tests/unit-d/FailedParserOutput
 */

import type { ParseError } from '#src/errors'
import type { TokenType } from '#src/types'
import type { Nilable } from '@flex-development/tutils'
import type ParseCandidate from '../parse-candidate'
import type TestSubject from '../parser-output-failed'

describe('unit-d:interfaces/FailedParserOutput', () => {
  it('should match [candidates?: [] | ParseCandidate<T, never>[] | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('candidates')
      .toEqualTypeOf<Nilable<[] | ParseCandidate<TokenType, never>[]>>()
  })

  it('should match [error: ParseError<T>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('error')
      .toEqualTypeOf<ParseError>()
  })

  it('should match [successful: false]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('successful')
      .toEqualTypeOf<false>()
  })
})
