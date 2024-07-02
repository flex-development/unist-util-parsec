/**
 * @file Type Tests - ListNParser
 * @module unist-util-parsec/types/tests/unit-d/ListNParser
 */

import type { Parser } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../parser-listn'
import type ListNResult from '../result-listn'
import type TokenType from '../token-type'

describe('unit-d:types/ListNParser', () => {
  it('should equal Parser<T, ListNResult<N, R>>', () => {
    // Arrange
    type T = TokenType
    type N = 2
    type R = Literal | Node | Parent
    type Expect = Parser<T, ListNResult<N, R>>

    // Expect
    expectTypeOf<TestSubject<T, N, R>>().toEqualTypeOf<Expect>()
  })
})
