import type tt from '#fixtures/tt'
import type {} from '#src/interfaces'

declare module '#src/interfaces' {
  interface TokenTypeMap {
    eof: tt.eof
    number: tt.number
  }
}
