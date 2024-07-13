/**
 * @file Unit Tests - ParseError
 * @module unist-util-parsec/errors/tests/unit/ParseError
 */

import eof from '#fixtures/token-eof'
import sof from '#fixtures/token-sof'
import TestSubject from '../parse.error'

describe('unit:errors/ParseError', () => {
  let reason: string
  let subject: TestSubject

  beforeAll(() => {
    subject = new TestSubject(eof, reason = 'Unexpected token')
  })

  describe('constructor', () => {
    it('should set #cause', () => {
      expect(subject).to.have.property('cause', eof)
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

  describe('.best', () => {
    it.each<[string, 0 | 1, Parameters<(typeof TestSubject)['best']>]>([
      [
        '`e1.range.start.offset >= e2.range.start.offset`',
        0,
        [new TestSubject(eof), new TestSubject(sof)]
      ],
      [
        '`e1.range.start.offset < e2.range.start.offset`',
        1,
        [new TestSubject(sof), new TestSubject(eof)]
      ],
      ['no `e1`', 1, [, new TestSubject(eof)]],
      ['no `e1.range`', 0, [new TestSubject(), new TestSubject(eof)]],
      ['no `e2`', 0, [new TestSubject(sof)]],
      ['no `e2.range`', 1, [new TestSubject(sof), new TestSubject()]]
    ])('should return best parse error (%s)', (_, index, params) => {
      expect(TestSubject.best(...params)).to.eq(params[index])
    })
  })
})
