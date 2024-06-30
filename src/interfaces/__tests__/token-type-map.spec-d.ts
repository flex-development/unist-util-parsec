/**
 * @file Type Tests - TokenTypeMap
 * @module unist-util-parsec/interfaces/tests/unit-d/TokenTypeMap
 */

import type { tt } from '@flex-development/esast-util-from-code'
import type TestSubject from '../token-type-map'

describe('unit-d:interfaces/TokenTypeMap', () => {
  it('should register token types', () => {
    expectTypeOf<keyof TestSubject>().extract<keyof typeof tt>().not.toBeNever()
  })
})
