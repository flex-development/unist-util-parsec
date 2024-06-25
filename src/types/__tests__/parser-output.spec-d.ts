/**
 * @file Type Tests - ParserOutput
 * @module unist-util-parsec/types/tests/unit-d/ParserOutput
 */

import type { FailedParserOutput, SucceededParserOutput } from '#src/interfaces'
import type TestSubject from '../parser-output'

describe('unit-d:types/ParserOutput', () => {
  it('should extract FailedParserOutput', () => {
    expectTypeOf<TestSubject>().extract<FailedParserOutput>().not.toBeNever()
  })

  it('should extract SucceededParserOutput<T, R>', () => {
    expectTypeOf<TestSubject>()
      .extract<SucceededParserOutput>()
      .not.toBeNever()
  })
})
