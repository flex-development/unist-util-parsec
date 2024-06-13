/**
 * @file Type Tests - TokenValueMap
 * @module unist-util-parsec/interfaces/tests/unit-d/TokenValueMap
 */

import type TestSubject from '../token-value-map'

describe('unit-d:interfaces/TokenValueMap', () => {
  it('should not register any token values', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
    expectTypeOf<TestSubject[keyof TestSubject]>().toBeNever()
  })
})
