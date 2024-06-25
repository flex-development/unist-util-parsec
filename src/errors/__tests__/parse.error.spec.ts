/**
 * @file Unit Tests - ParseError
 * @module unist-util-parsec/errors/tests/unit/ParseError
 */

import tt from '#fixtures/tt'
import type { Point, Token } from '#src/interfaces'
import type { TokenValue } from '#src/types'
import TestSubject from '../parse.error'

describe('unit:errors/ParseError', () => {
  let reason: string
  let point: Point
  let subject: TestSubject
  let token: Token & { value: TokenValue }

  beforeAll(() => {
    point = { column: 1, line: 1, offset: 0 }
    token = { end: point, start: point, type: tt.eof, value: null }
    subject = new TestSubject(token, reason = 'Unexpected token')
  })

  describe('constructor', () => {
    it('should set #cause', () => {
      expect(subject).to.have.property('cause', token).and.be.frozen
    })

    it('should set #message', () => {
      expect(subject).to.have.property('message', reason)
    })

    it('should set #name', () => {
      expect(subject).to.have.property('name', 'ParseError')
    })

    it('should set #range', () => {
      expect(subject).to.have.property('range').eql({
        end: point,
        start: point
      })
    })
  })
})
