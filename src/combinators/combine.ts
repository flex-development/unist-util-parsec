/**
 * @file Combinators - combine
 * @module unist-util-parsec/combinators/combine
 */

import { ParseError } from '#src/errors'
import type { ParseCandidate, Parser, Token } from '#src/interfaces'
import type { CombineCallback, ParserOutput, TokenType } from '#src/types'
import { out } from '#src/utils'

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - Final parse result callback
 * @return {Parser<T, R2>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>
): Parser<T, R2>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Final parse result callback
 * @return {Parser<T, R3>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>
): Parser<T, R3>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Final parse result callback
 * @return {Parser<T, R4>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>
): Parser<T, R4>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Final parse result callback
 * @return {Parser<T, R5>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>
): Parser<T, R5>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Final parse result callback
 * @return {Parser<T, R6>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5, R6>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>
): Parser<T, R6>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Final parse result callback
 * @return {Parser<T, R7>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5, R6, R7>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>
): Parser<T, R7>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Final parse result callback
 * @return {Parser<T, R8>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5, R6, R7, R8>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>
): Parser<T, R8>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Final parse result callback
 * @return {Parser<T, R9>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>
): Parser<T, R9>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Final parse result callback
 * @return {Parser<T, R10>} Monadic sequential parser
 */
function combine<T extends TokenType, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>
): Parser<T, R10>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Final parse result callback
 * @return {Parser<T, R11>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>
): Parser<T, R11>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Eleventh parse candidate result
 * @template {any} R12 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Tenth parse result callback
 * @param {CombineCallback<T, R11, R12>} f11 - Final parse result callback
 * @return {Parser<T, R12>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>,
  f11: CombineCallback<T, R11, R12>
): Parser<T, R12>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Eleventh parse candidate result
 * @template {any} R12 - Twelfth parse candidate result
 * @template {any} R13 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Tenth parse result callback
 * @param {CombineCallback<T, R11, R12>} f11 - 11th parse result callback
 * @param {CombineCallback<T, R12, R13>} f12 - Final parse result callback
 * @return {Parser<T, R13>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>,
  f11: CombineCallback<T, R11, R12>,
  f12: CombineCallback<T, R12, R13>
): Parser<T, R13>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Eleventh parse candidate result
 * @template {any} R12 - Twelfth parse candidate result
 * @template {any} R13 - Thirteenth parse candidate result
 * @template {any} R14 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Tenth parse result callback
 * @param {CombineCallback<T, R11, R12>} f11 - 11th parse result callback
 * @param {CombineCallback<T, R12, R13>} f12 - 12th parse result callback
 * @param {CombineCallback<T, R13, R14>} f13 - Final parse result callback
 * @return {Parser<T, R14>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>,
  f11: CombineCallback<T, R11, R12>,
  f12: CombineCallback<T, R12, R13>,
  f13: CombineCallback<T, R13, R14>
): Parser<T, R14>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Eleventh parse candidate result
 * @template {any} R12 - Twelfth parse candidate result
 * @template {any} R13 - Thirteenth parse candidate result
 * @template {any} R14 - Fourteenth parse candidate result
 * @template {any} R15 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Tenth parse result callback
 * @param {CombineCallback<T, R11, R12>} f11 - 11th parse result callback
 * @param {CombineCallback<T, R12, R13>} f12 - 12th parse result callback
 * @param {CombineCallback<T, R13, R14>} f13 - 13th parse result callback
 * @param {CombineCallback<T, R14, R15>} f14 - Final parse result callback
 * @return {Parser<T, R15>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14,
  R15
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>,
  f11: CombineCallback<T, R11, R12>,
  f12: CombineCallback<T, R12, R13>,
  f13: CombineCallback<T, R13, R14>,
  f14: CombineCallback<T, R14, R15>
): Parser<T, R15>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 * @template {any} R6 - Sixth parse candidate result
 * @template {any} R7 - Seventh parse candidate result
 * @template {any} R8 - Eighth parse candidate result
 * @template {any} R9 - Ninth parse candidate result
 * @template {any} R10 - Tenth parse candidate result
 * @template {any} R11 - Eleventh parse candidate result
 * @template {any} R12 - Twelfth parse candidate result
 * @template {any} R13 - Thirteenth parse candidate result
 * @template {any} R14 - Fourteenth parse candidate result
 * @template {any} R15 - Fifteenth parse candidate result
 * @template {any} R16 - Final parse candidate result
 *
 * @param {Parser<T, R1>} p - First parser
 * @param {CombineCallback<T, R1, R2>} f1 - First parse result callback
 * @param {CombineCallback<T, R2, R3>} f2 - Second parse result callback
 * @param {CombineCallback<T, R3, R4>} f3 - Third parse result callback
 * @param {CombineCallback<T, R4, R5>} f4 - Fourth parse result callback
 * @param {CombineCallback<T, R5, R6>} f5 - Fifth parse result callback
 * @param {CombineCallback<T, R6, R7>} f6 - Sixth parse result callback
 * @param {CombineCallback<T, R7, R8>} f7 - Seventh parse result callback
 * @param {CombineCallback<T, R8, R9>} f8 - Eighth parse result callback
 * @param {CombineCallback<T, R9, R10>} f9 - Ninth parse result callback
 * @param {CombineCallback<T, R10, R11>} f10 - Tenth parse result callback
 * @param {CombineCallback<T, R11, R12>} f11 - 11th parse result callback
 * @param {CombineCallback<T, R12, R13>} f12 - 12th parse result callback
 * @param {CombineCallback<T, R13, R14>} f13 - 13th parse result callback
 * @param {CombineCallback<T, R14, R15>} f14 - 14th parse result callback
 * @param {CombineCallback<T, R15, R16>} f15 - Final parse result callback
 * @return {Parser<T, R16>} Monadic sequential parser
 */
function combine<
  T extends TokenType,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  R14,
  R15,
  R16
>(
  p: Parser<T, R1>,
  f1: CombineCallback<T, R1, R2>,
  f2: CombineCallback<T, R2, R3>,
  f3: CombineCallback<T, R3, R4>,
  f4: CombineCallback<T, R4, R5>,
  f5: CombineCallback<T, R5, R6>,
  f6: CombineCallback<T, R6, R7>,
  f7: CombineCallback<T, R7, R8>,
  f8: CombineCallback<T, R8, R9>,
  f9: CombineCallback<T, R9, R10>,
  f10: CombineCallback<T, R10, R11>,
  f11: CombineCallback<T, R11, R12>,
  f12: CombineCallback<T, R12, R13>,
  f13: CombineCallback<T, R13, R14>,
  f14: CombineCallback<T, R14, R15>,
  f15: CombineCallback<T, R15, R16>
): Parser<T, R16>

/**
 * Sequentially apply parsers, where all parsers after the first depend on the
 * result of the previous parser.
 *
 * Fails if any parser fails.
 *
 * @see {@linkcode CombineCallback}
 * @see {@linkcode Parser}
 *
 * @param {Parser} p - First parser
 * @param {CombineCallback[]} callbacks - Parser callbacks
 * @return {Parser} Monadic sequential parser
 */
function combine(p: Parser, ...callbacks: CombineCallback[]): Parser {
  return { parse }

  /**
   * Consume a token sequence.
   *
   * @param {Token?} [token] - Current token
   * @return {ParserOutput} Parser output
   */
  function parse(token?: Token): ParserOutput {
    /**
     * Parser output.
     *
     * @var {ParserOutput} output
     */
    let output: ParserOutput = p.parse(token)

    // try next parsers if first parser was successful
    if (output.successful) {
      /**
       * Parse candidate.
       *
       * @const {ParseCandidate} candidate
       */
      const candidate: ParseCandidate = Object.assign({}, output.candidate)

      /**
       * Parse error.
       *
       * @var {ParseError | null | undefined} error
       */
      let error: ParseError | null | undefined = output.error

      // invoke parsers sequentially
      for (const f of callbacks) {
        /**
         * Parser to invoke.
         *
         * @const {Parser} q
         */
        const q: Parser = f(candidate.result, [candidate.head, candidate.next])

        /**
         * Current parser output.
         *
         * @const {ParserOutput} current
         */
        const current: ParserOutput = q.parse(candidate.next)

        // get best parse error
        error = ParseError.best(error, current.error)

        // fail parse attempt if current parser fails
        if (!current.successful) return out(false, null, error)

        // reset parse result and consume token
        candidate.result = current.candidate.result
        candidate.next = current.candidate.next
      }

      // reset parser output
      output = out(true, candidate, error)
    }

    return output
  }
}

export default combine
