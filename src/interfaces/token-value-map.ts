/**
 * @file Interfaces - TokenValueMap
 * @module unist-util-parsec/interfaces/TokenValueMap
 */

/**
 * Token value registry.
 *
 * This interface can be augmented to register custom token values.
 *
 * @example
 *  declare module '@flex-development/unist-util-parsec' {
 *    interface TokenValueMap {
 *      value: TokenValue
 *    }
 *  }
 */
interface TokenValueMap {}

export type { TokenValueMap as default }
