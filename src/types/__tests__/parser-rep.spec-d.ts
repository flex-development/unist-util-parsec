/**
 * @file Type Tests - RepParser
 * @module unist-util-parsec/types/tests/unit-d/RepParser
 */

import type { SucceededParser } from '#src/interfaces'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../parser-rep'
import type RepResult from '../result-rep'
import type TokenType from '../token-type'

describe('unit-d:types/RepParser', () => {
  it('should equal SucceededParser<T, RepResult<R>>', () => {
    // Arrange
    type T = TokenType
    type R = Literal | Node | Parent
    type Expect = SucceededParser<T, RepResult<R>>

    // Expect
    expectTypeOf<TestSubject<T, R>>().toEqualTypeOf<Expect>()
  })
})
