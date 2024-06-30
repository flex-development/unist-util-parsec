/**
 * @file Unit Tests - ParseError
 * @module unist-util-parsec/errors/tests/unit/ParseError
 */

import type { Token } from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import TestSubject from '../parse.error'

describe('unit:errors/ParseError', () => {
  let eof: Token<tt.eof>
  let reason: string
  let subject: TestSubject

  beforeAll(() => {
    eof = {
      end: { column: 1, line: 2, offset: 18 },
      start: { column: 1, line: 2, offset: 18 },
      type: tt.eof,
      value: chars.eof
    }

    subject = new TestSubject(eof, reason = 'Unexpected token')
  })

  describe('constructor', () => {
    it('should set #cause', () => {
      expect(subject).to.have.property('cause', eof).and.be.frozen
    })

    it('should set #message', () => {
      expect(subject).to.have.property('message', reason)
    })

    it('should set #name', () => {
      expect(subject).to.have.property('name', 'ParseError')
    })

    it('should set #range', () => {
      expect(subject).to.have.property('range').eql({
        end: eof.end,
        start: eof.start
      })
    })
  })
})
