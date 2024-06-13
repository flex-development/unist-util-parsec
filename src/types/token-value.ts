/**
 * @file Type Aliases - TokenValue
 * @module unist-util-parsec/types/TokenValue
 */

import type { TokenValueMap } from '#src/interfaces'

/**
 * Union of registered token values.
 *
 * @see {@linkcode TokenValueMap}
 */
type TokenValue = TokenValueMap[keyof TokenValueMap]

export type { TokenValue as default }
