/**
 * @file Interfaces - TokenTypeMap
 * @module unist-util-parsec/interfaces/TokenTypeMap
 */

/**
 * Token type registry.
 *
 * This interface can be augmented to register custom token types.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface TokenTypeMap {
 *      eof: true
 *    }
 *  }
 */
interface TokenTypeMap {}

export type { TokenTypeMap as default }
