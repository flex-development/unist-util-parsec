/**
 * @file Type Tests - RepNParser
 * @module unist-util-parsec/types/tests/unit-d/RepNParser
 */

import type { Parser } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../parser-repn'
import type RepNResult from '../result-repn'
import type TokenType from '../token-type'

describe('unit-d:types/RepNParser', () => {
  it('should equal Parser<T, RepNResult<N, R>>', () => {
    // Arrange
    type T = TokenType
    type N = 2
    type R = Literal | Node | Parent
    type Expect = Parser<T, RepNResult<N, R>>

    // Expect
    expectTypeOf<TestSubject<T, N, R>>().toEqualTypeOf<Expect>()
  })
})
