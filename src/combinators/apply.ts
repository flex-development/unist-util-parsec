/**
 * @file Combinators - apply
 * @module unist-util-parsec/combinators/apply
 */

import type { Parser, Token } from '#src/interfaces'
import type {
  ApplyCallback,
  ParserOutput,
  TokenRange,
  TokenType
} from '#src/types'

/**
 * Parse an occurrence of `x`, and transform the result with `f`.
 *
 * Fails if `x` fails.
 *
 * @see {@linkcode ApplyCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenRange}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} From - Original parse candidate result
 * @template {any} To - Final parse candidate result
 * @template {TokenRange} [Range=TokenRange] - Token range
 *
 * @param {Parser<T, From>} x - Parser to apply
 * @param {ApplyCallback<From, To, Range>} f - Transform callback
 * @return {Parser<T, To>} Applicative parser
 */
function apply<
  T extends TokenType,
  From,
  To,
  Range extends TokenRange = TokenRange
>(x: Parser<T, From>, f: ApplyCallback<From, To, Range>): Parser<T, To> {
  return { parse }

  /**
   * Consume `token` and transform the result.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, To>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, To> {
    /**
     * Parser output.
     *
     * @const {ParserOutput<T, V>} output
     */
    const output: ParserOutput<T, From> = x.parse(token)

    // transform parse candidate result
    if (output.successful) {
      return {
        candidate: {
          head: token,
          next: output.candidate.next,
          result: f(output.candidate.result, [
            token,
            output.candidate.next
          ] as unknown as Range)
        },
        error: output.error,
        successful: true
      }
    }

    return output
  }
}

export default apply
