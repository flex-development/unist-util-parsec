/**
 * @file Test Types - PunctuatorToken
 * @module tests/types/PunctuatorToken
 */

import type { Token, tt } from '@flex-development/esast-util-from-code'

/**
 * Token representing a punctuator.
 *
 * @see {@linkcode Token}
 * @see {@linkcode tt.punctuator}
 */
type PunctuatorToken = Token<tt.punctuator>

export type { PunctuatorToken as default }
