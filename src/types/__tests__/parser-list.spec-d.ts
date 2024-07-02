/**
 * @file Type Tests - ListParser
 * @module unist-util-parsec/types/tests/unit-d/ListParser
 */

import type { Parser } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../parser-list'
import type ListResult from '../result-list'
import type TokenType from '../token-type'

describe('unit-d:types/ListParser', () => {
  it('should equal Parser<T, ListResult<R>>', () => {
    // Arrange
    type T = TokenType
    type R = Literal | Node | Parent

    // Expect
    expectTypeOf<TestSubject<T, R>>().toEqualTypeOf<Parser<T, ListResult<R>>>()
  })
})
