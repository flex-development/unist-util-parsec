import type {} from '#src/interfaces'
import type { NodeMap } from '@flex-development/esast'
import type { tt } from '@flex-development/esast-util-from-code'

declare module '#src/interfaces' {
  interface ApplyNodeMap extends NodeMap {}

  interface Token {
    whitespace?: string | undefined
  }

  interface TokenTypeMap {
    bigint: tt.bigint
    comment: tt.comment
    eof: tt.eof
    keyid: tt.keyid
    number: tt.number
    punctuator: tt.punctuator
    sof: tt.sof
    string: tt.string
    whitespace: tt.whitespace
  }
}
