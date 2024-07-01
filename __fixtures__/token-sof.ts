/**
 * @file Fixtures - sof
 * @module fixtures/token/sof
 */

import type { Token } from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'

/**
 * Start of file token.
 *
 * @const {Token<tt.sof>} sof
 */
const sof: Token<tt.sof> = {
  end: { column: 1, line: 1, offset: 0 },
  start: { column: 1, line: 1, offset: 0 },
  type: tt.sof,
  value: chars.eof
}

export default sof
