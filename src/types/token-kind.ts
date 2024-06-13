/**
 * @file Type Aliases - TokenKind
 * @module unist-util-parsec/types/TokenKind
 */

import type { TokenKindMap } from '#src/interfaces'

/**
 * Union of registered token kinds.
 *
 * @see {@linkcode TokenKindMap}
 */
type TokenKind = TokenKindMap[keyof TokenKindMap] & (number | string)

export type { TokenKind as default }
