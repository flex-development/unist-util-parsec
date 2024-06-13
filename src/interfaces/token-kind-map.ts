/**
 * @file Interfaces - TokenKindMap
 * @module unist-util-parsec/interfaces/TokenKindMap
 */

/**
 * Token kind registry.
 *
 * This interface can be augmented to register custom token kinds.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface TokenKindMap {
 *      kind: TokenKind
 *    }
 *  }
 */
interface TokenKindMap {}

export type { TokenKindMap as default }
