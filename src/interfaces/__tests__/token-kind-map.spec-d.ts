/**
 * @file Type Tests - TokenKindMap
 * @module unist-util-parsec/interfaces/tests/unit-d/TokenKindMap
 */

import type TestSubject from '../token-kind-map'

describe('unit-d:interfaces/TokenKindMap', () => {
  it('should not register any token kinds', () => {
    expectTypeOf<keyof TestSubject>().toBeNever()
    expectTypeOf<TestSubject[keyof TestSubject]>().toBeNever()
  })
})
