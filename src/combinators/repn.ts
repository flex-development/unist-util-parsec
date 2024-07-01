/**
 * @file Combinators - repn
 * @module unist-util-parsec/combinators/repn
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type {
  ParserOutput,
  RepNParser,
  RepNResult,
  TokenType
} from '#src/types'
import { out } from '#src/utils'

/**
 * Parse exactly `n` occurrences of `x`.
 *
 * Results in `Tx[]`.
 *
 * Fails if less than `n` occurrences of `x` are parsed.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode RepNParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {number} N - Number of occurrences to parse
 * @template {any} R - Parse candidate result
 *
 * @param {N} n - Number of occurrences to parse
 * @param {Parser<T, R>} x - Parser to apply
 * @return {RepNParser<T, N, R>} Exact repetitive parser
 */
function repn<T extends TokenType, N extends number, R>(
  n: N,
  x: Parser<T, R>
): RepNParser<T, N, R> {
  return { parse }

  /**
   * Parse exactly {@linkcode n} occurrences of {@linkcode x}.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {ParserOutput<T, RepNResult<N, R>>} Parser output
   */
  function parse(token?: Token<T>): ParserOutput<T, RepNResult<N, R>> {
    /**
     * Parse candidate.
     *
     * @const {ParseCandidate<T, R[]>} candidate
     */
    const candidate: ParseCandidate<T, R[]> = {
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
    for (let i = 0; i < n; i++) {
      /**
       * Current parser output.
       *
       * @const {ParserOutput<T, R>} output
       */
      const output: ParserOutput<T, R> = x.parse(<never>candidate.next)

      // get best parse error
      error = ParseError.best(error, output.error)

      // fail parse attempt if current attempt fails
      if (!output.successful) return out(false, null, error)

      // add new parse result and consume token
      candidate.result = [...candidate.result, output.candidate.result]
      candidate.next = output.candidate.next
    }

    return out(true, candidate, error)
  }
}

export default repn
