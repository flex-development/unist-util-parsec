/**
 * @file Combinators - until
 * @module unist-util-parsec/combinators/until
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type { ParserOutput, RepResult, TokenType } from '#src/types'
import { out } from '#src/utils'

/**
 * Parse zero (`0`) or more occurrences of `x`, until an occurrence of `u` is
 * reached. Does not consume tokens parsed by `u`.
 *
 * Results in `Tx[]`.
 *
 * Fails if `x` fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode RepResult}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @param {Parser<T>} u - Terminator parser
 * @return {Parser<T, RepResult<R>>} Terminal repetitive parser
 */
function until<
  T extends TokenType,
  R
>(x: Parser<T, R>, u: Parser<T>): Parser<T, RepResult<R>> {
  return { parse }

  /**
   * Parse zero or more occurrences of {@linkcode x} until an occurrence of
   * {@linkcode u} is reached.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, RepResult<R>>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, RepResult<R>> {
    /**
     * Parse candidate.
     *
     * @const {ParseCandidate<T, RepResult<R>>} candidate
     */
    const candidate: ParseCandidate<T, RepResult<R>> = {
      head: token,
      next: token,
      result: []
    }

    /**
     * Parse error.
     *
     * @var {ParseError | null | undefined} error
     */
    let error: ParseError | null | undefined

    // parse token
    while (true) {
      if (u.parse(<never>candidate.next).successful) break

      /**
       * Current parser output.
       *
       * @const {ParserOutput<T, R>} output
       */
      const output: ParserOutput<T, R> = x.parse(<never>candidate.next)

      // get best parse error
      error = ParseError.best(error, output.error)

      // stop parsing on failed attempt
      if (!output.successful) return out(false, candidate, error)

      // add new parse result
      if (candidate.next !== output.candidate.next) {
        candidate.result = [...candidate.result, output.candidate.result]
      }

      // consume token
      candidate.next = output.candidate.next
    }

    return out(true, candidate, error)
  }
}

export default until
