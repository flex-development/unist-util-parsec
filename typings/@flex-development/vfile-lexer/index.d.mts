import type * as parsec from '#src'

declare module '@flex-development/vfile-lexer' {
  interface Token extends parsec.Token {}

  interface TokenTypeMap extends parsec.TokenTypeMap {}
}
