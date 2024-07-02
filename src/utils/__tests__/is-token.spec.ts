/**
 * @file Unit Tests - isToken
 * @module unist-util-parsec/utils/tests/unit/isToken
 */

import type { Token } from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../is-token'

describe('unit:utils/isToken', () => {
  let token: Token

  beforeAll(() => {
    token = {
      end: { column: 1, line: 1, offset: 0 },
      start: { column: 1, line: 1, offset: 0 },
      type: tt.sof,
      value: chars.eof
    }

    token.next = {
      end: token.end,
      previous: token,
      start: token.start,
      type: tt.eof,
      value: chars.eof
    }
  })

  it('should return false if `value` is not token like', () => {
    expect(testSubject(token.start)).to.be.false
  })

  it('should return true if `value` is token like', () => {
    expect(testSubject(token)).to.be.true
  })
})
