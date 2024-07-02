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
      'apply',
      'applyList',
      'chk',
      'combine',
      'condition',
      'eat',
      'err',
      'errf',
      'fail',
      'kleft',
      'kmid',
      'kright',
      'ksides',
      'lazy',
      'list',
      'listn',
      'match',
      'nok',
      'opt',
      'out',
      'range',
      'rep',
      'repn',
      'seq',
      'succ',
      'tok',
      'val'
    ])
  })
})
