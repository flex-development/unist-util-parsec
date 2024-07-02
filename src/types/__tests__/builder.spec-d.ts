/**
 * @file Type Tests - Builder
 * @module unist-util-parsec/types/tests/unit-d/Builder
 */

import type * as esast from '@flex-development/esast'
import type * as ub from '@flex-development/unist-util-builder'
import type { Match, Type } from '@flex-development/unist-util-types'
import type * as mdast from 'mdast'
import type * as unist from 'unist'
import type ApplyNode from '../apply-node'
import type TestSubject from '../builder'

describe('unit-d:types/Builder', () => {
  it('should equal never if T does not extend Type<ApplyNode>', () => {
    expectTypeOf<TestSubject<Type>>().toBeNever()
  })

  describe('T extends Type<ApplyNode>', () => {
    describe('node', () => {
      it('should construct node builders union', () => {
        // Arrange
        type T = Type<mdast.Code>
        type Expect = ub.Builder<Match<ApplyNode, T>>

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })

    describe('parent', () => {
      it('should construct node builders union', () => {
        // Arrange
        type T = Type<esast.CallExpression>
        type Expect =
          | (
            | esast.ArgumentList
            | esast.Comment
            | esast.Expression
            | esast.TypeArgumentList
          )[]
          | {
            children: (
              | esast.ArgumentList
              | esast.Comment
              | esast.Expression
              | esast.TypeArgumentList
            )[]
            data?: esast.CallExpressionData | undefined
            optional: boolean
            position?: unist.Position | undefined
          }

        // Expect
        expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
      })
    })
  })
})
