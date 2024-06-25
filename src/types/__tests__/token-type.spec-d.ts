/**
 * @file Type Tests - TokenType
 * @module unist-util-parsec/types/tests/unit-d/TokenType
 */

import type { TokenTypeMap } from '#src/interfaces'
import type TestSubject from '../token-type'

describe('unit-d:types/TokenType', () => {
  it('should equal keyof TokenTypeMap', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<keyof TokenTypeMap>()
  })
})
