/**
 * @file Unit Tests - fail
 * @module unist-util-parsec/combinators/tests/unit/fail
 */

import sof from '#fixtures/token-sof'
import { ParseError } from '#src/errors'
import type { FailedParserOutput } from '#src/interfaces'
import testSubject from '../fail'

describe('unit:combinators/fail', () => {
  describe('parser', () => {
    let output: FailedParserOutput

    beforeAll(() => {
      output = testSubject().parse(sof)
    })

    it('should fail without consuming token', () => {
      expect(output.successful).to.be.false
      expect(output.error).to.be.instanceof(ParseError)
      expect(output.error).to.have.property('cause', sof)
    })
  })
})
