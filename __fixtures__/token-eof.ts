/**
 * @file Fixtures - eof
 * @module fixtures/token/eof
 */

import type { Token } from '#src/interfaces'
import { tt } from '@flex-development/esast-util-from-code'
import { chars } from '@flex-development/vfile-lexer'

/**
 * End of file token.
 *
 * @const {Token<tt.eof>} eof
 */
const eof: Token<tt.eof> = {
  end: { column: 1, line: 2, offset: 18 },
  start: { column: 1, line: 2, offset: 18 },
  type: tt.eof,
  value: chars.eof
}

export default eof
