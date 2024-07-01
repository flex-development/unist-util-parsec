/**
 * @file E2E Tests - api
 * @module unist-util-parsec/tests/e2e/api
 */

import * as testSubject from '../index'

describe('e2e:unist-util-parsec', () => {
  it('should expose public api', () => {
    expect(testSubject).to.have.keys([
      'ParseError',
      'alt',
      'chk',
      'condition',
      'eat',
      'fail',
      'match',
      'nok',
      'opt',
      'out',
      'succ',
      'tok',
      'val'
    ])
  })
})
