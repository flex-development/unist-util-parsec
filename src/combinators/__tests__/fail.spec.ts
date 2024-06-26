/**
 * @file Unit Tests - fail
 * @module unist-util-parsec/combinators/tests/unit/fail
 */

import tt from '#fixtures/tt'
import { ParseError } from '#src/errors'
import type {
  FailedParserOutput,
  Point,
  Token
} from '#src/interfaces'
import testSubject from '../fail'

describe('unit:combinators/fail', () => {
  describe('parser', () => {
    let output: FailedParserOutput
    let point: Point
    let token: Token & { value: null }

    beforeAll(() => {
      point = { column: 1, line: 1, offset: 0 }
      token = { end: point, start: point, type: tt.eof, value: null }

      output = testSubject().parse(token)
    })

    it('should fail without consuming token', () => {
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', token)
    })
  })
})
