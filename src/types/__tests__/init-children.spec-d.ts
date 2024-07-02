/**
 * @file Type Tests - InitChildren
 * @module unist-util-parsec/types/tests/unit-d/InitChildren
 */

import type { Token } from '#src/interfaces'
import type { EmptyArray } from '@flex-development/tutils'
import type { Literal, Node, Parent } from 'unist'
import type TestSubject from '../init-children'

describe('unit-d:types/InitChildren', () => {
  it('should equal [] if T does not extend { children: Node[] }', () => {
    expectTypeOf<TestSubject<Literal>>().toEqualTypeOf<EmptyArray>()
    expectTypeOf<TestSubject<Node>>().toEqualTypeOf<EmptyArray>()
  })

  describe('T extends { children: Node[] }', () => {
    type I = Literal | Node | Parent | Token | null | undefined
    type I1 = I | readonly I[]
    type I2 = I1 | readonly I1[]
    type I3 = I2 | readonly I2[]
    type I4 = I3 | readonly I3[]
    type I5 = I4 | readonly I4[]

    it('should allow 1 dimensional array', () => {
      expectTypeOf<I1>().toMatchTypeOf<TestSubject>()
    })

    it('should allow 2 dimensional array', () => {
      expectTypeOf<I2>().toMatchTypeOf<TestSubject>()
      expectTypeOf<readonly I[][]>().toMatchTypeOf<TestSubject>()
    })

    it('should allow 3 dimensional array', () => {
      expectTypeOf<I3>().toMatchTypeOf<TestSubject>()
      expectTypeOf<readonly I[][][]>().toMatchTypeOf<TestSubject>()
    })

    it('should allow 4 dimensional array', () => {
      expectTypeOf<I4>().toMatchTypeOf<TestSubject>()
      expectTypeOf<readonly I[][][][]>().toMatchTypeOf<TestSubject>()
    })

    it('should allow 5 dimensional array', () => {
      expectTypeOf<I5>().toMatchTypeOf<TestSubject>()
      expectTypeOf<readonly I[][][][][]>().toMatchTypeOf<TestSubject>()
    })

    it('should allow Literal', () => {
      expectTypeOf<Literal>().toMatchTypeOf<TestSubject>()
    })

    it('should allow Node', () => {
      expectTypeOf<Node>().toMatchTypeOf<TestSubject>()
    })

    it('should allow Parent', () => {
      expectTypeOf<Parent>().toMatchTypeOf<TestSubject>()
    })

    it('should allow Token', () => {
      expectTypeOf<Token>().toMatchTypeOf<TestSubject>()
    })

    it('should allow null', () => {
      expectTypeOf<null>().toMatchTypeOf<TestSubject>()
    })

    it('should allow undefined', () => {
      expectTypeOf<undefined>().toMatchTypeOf<TestSubject>()
    })
  })
})
