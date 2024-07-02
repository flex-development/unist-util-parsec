/**
 * @file Type Tests - ApplyNodeMap
 * @module unist-util-parsec/interfaces/tests/unit-d/ApplyNodeMap
 */

import type * as esast from '@flex-development/esast'
import type TestSubject from '../apply-node-map'

describe('unit-d:interfaces/ApplyNodeMap', () => {
  it('should register nodes', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<esast.NodeMap>()
  })
})
