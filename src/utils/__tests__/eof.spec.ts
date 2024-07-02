/**
 * @file Unit Tests - eof
 * @module unist-util-parsec/utils/tests/unit/eof
 */

import { ParseError } from '#src/errors'
import type {
  FailedParserOutput,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'
import testSubject from '../eof'

describe('unit:utils/eof', () => {
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

  it('should return `output` if output is unsuccessful', () => {
    // Arrange
    const output: FailedParserOutput = {
      error: new ParseError(),
      successful: false
    }

    // Act + Expect
    expect(testSubject(output)).to.eq(output)
  })

  it('should return failed output if all tokens are not consumed', () => {
    // Arrange
    const message: string = 'Unable to reach end of file'

    // Act
    const result = testSubject({
      candidate: { head: token, next: token.next, result: null },
      successful: true
    })

    // Expect
    expect(result.successful).to.be.false
    expect(result.error).to.be.instanceof(ParseError)
    expect(result.error).to.have.property('cause', token.next)
    expect(result.error).to.have.property('message', message)
  })

  it('should return failed output if parse candidate is missing', () => {
    // Act
    const result = testSubject(<SucceededParserOutput>{ successful: true })

    // Expect
    expect(result.successful).to.be.false
    expect(result.error).to.be.instanceof(ParseError)
    expect(result.error).to.have.property('cause', undefined)
    expect(result.error).to.have.property('message', 'No parse candidate found')
  })
})
