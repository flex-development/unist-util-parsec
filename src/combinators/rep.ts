/**
 * @file Combinators - rep
 * @module unist-util-parsec/combinators/rep
 */

import { ParseError } from '#src/errors'
import type {
  ParseCandidate,
  Parser,
  SucceededParserOutput,
  Token
} from '#src/interfaces'
import type {
  ParserOutput,
  RepParser,
  RepResult,
  TokenType
} from '#src/types'
import { out } from '#src/utils'

/**
 * Parse zero (`0`) or more occurrences of `x`.
 *
 * Results in `Tx[]`, or an empty array (`[]`) if no tokens could be consumed.
 *
 * Never fails.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode RepParser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R - Parse candidate result
 *
 * @param {Parser<T, R>} x - Parser to apply
 * @return {RepParser<T, R>} Repetitive parser
 */
function rep<T extends TokenType, R>(x: Parser<T, R>): RepParser<T, R> {
  return { parse }

  /**
   * Parse zero or more occurrences of {@linkcode x}.
   *
   * @param {Token<T>?} [token] - Current token
   * @return {SucceededParserOutput<T, RepResult<R>>} Parser output
   */
  function parse(token?: Token<T>): SucceededParserOutput<T, RepResult<R>> {
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

    // parse
    while (true) {
      /**
       * Current parser output.
       *
       * @const {ParserOutput<T, R>} output
       */
      const output: ParserOutput<T, R> = x.parse(<never>candidate.next)

      // get best parse error
      error = ParseError.best(error, output.error)

      // stop parsing on failed attempt
      if (!output.successful) break

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

export default rep
