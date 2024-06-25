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
      expect(output).to.not.have.property('candidates')
      expect(output).to.have.property('error').be.instanceof(ParseError)
      expect(output).to.have.property('error').with.property('cause', token)
      expect(output).to.have.property('successful').be.false
    })
  })
})
