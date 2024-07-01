/**
 * @file Combinators - alt
 * @module unist-util-parsec/combinators/alt
 */

import { ParseError } from '#src/errors'
import type { Parser, Token } from '#src/interfaces'
import type { ParserOutput, TokenType } from '#src/types'
import { out } from '#src/utils'

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @return {Parser<T, R1 | R2>} Alternate parser
 */
function alt<T extends TokenType, R1, R2>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>
): Parser<T, R1 | R2>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @return {Parser<T, R1 | R2 | R3>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>
): Parser<T, R1 | R2 | R3>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @return {Parser<T, R1 | R2 | R3 | R4>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3, R4>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>
): Parser<T, R1 | R2 | R3 | R4>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
 * @see {@linkcode Parser}
 * @see {@linkcode TokenType}
 *
 * @template {TokenType} T - Token type
 * @template {any} R1 - First parse candidate result
 * @template {any} R2 - Second parse candidate result
 * @template {any} R3 - Third parse candidate result
 * @template {any} R4 - Fourth parse candidate result
 * @template {any} R5 - Fifth parse candidate result
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3, R4, R5>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>
): Parser<T, R1 | R2 | R3 | R4 | R5>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3, R4, R5, R6>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3, R4, R5, R6, R7>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>} Alternate parser
 */
function alt<T extends TokenType, R1, R2, R3, R4, R5, R6, R7, R8>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>} Alternate
 * parser
 */
function alt<T extends TokenType, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>}
 * Alternate parser
 */
function alt<
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
  R10
>(
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>}
 * Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @param {Parser<T, R12>} p12 - Twelfth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
 * R12>} Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>,
  p12: Parser<T, R12>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @param {Parser<T, R12>} p12 - Twelfth parser
 * @param {Parser<T, R13>} p13 - Thirteenth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
 * R12 | R13>} Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>,
  p12: Parser<T, R12>,
  p13: Parser<T, R13>
): Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @param {Parser<T, R12>} p12 - Twelfth parser
 * @param {Parser<T, R13>} p13 - Thirteenth parser
 * @param {Parser<T, R14>} p14 - Fourteenth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
 * R12 | R13 | R14>} Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>,
  p12: Parser<T, R12>,
  p13: Parser<T, R13>,
  p14: Parser<T, R14>
): Parser<
  T,
  R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14
>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @param {Parser<T, R12>} p12 - Twelfth parser
 * @param {Parser<T, R13>} p13 - Thirteenth parser
 * @param {Parser<T, R14>} p14 - Fourteenth parser
 * @param {Parser<T, R15>} p15 - Fifteenth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
 * R12 | R13 | R14 | R15>} Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>,
  p12: Parser<T, R12>,
  p13: Parser<T, R13>,
  p14: Parser<T, R14>,
  p15: Parser<T, R15>
): Parser<
  T,
  R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15
>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
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
 * @template {any} R16 - Sixteenth parse candidate result
 *
 * @param {Parser<T, R1>} p1 - First parser
 * @param {Parser<T, R2>} p2 - Second parser
 * @param {Parser<T, R3>} p3 - Third parser
 * @param {Parser<T, R4>} p4 - Fourth parser
 * @param {Parser<T, R5>} p5 - Fifth parser
 * @param {Parser<T, R6>} p6 - Sixth parser
 * @param {Parser<T, R7>} p7 - Seventh parser
 * @param {Parser<T, R8>} p8 - Eighth parser
 * @param {Parser<T, R9>} p9 - Ninth parser
 * @param {Parser<T, R10>} p10 - Tenth parser
 * @param {Parser<T, R11>} p11 - Eleventh parser
 * @param {Parser<T, R12>} p12 - Twelfth parser
 * @param {Parser<T, R13>} p13 - Thirteenth parser
 * @param {Parser<T, R14>} p14 - Fourteenth parser
 * @param {Parser<T, R15>} p15 - Fifteenth parser
 * @param {Parser<T, R16>} p16 - Sixteenth parser
 * @return {Parser<T, R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 |
 * R12 | R13 | R14 | R15 | R16>} Alternate parser
 */
function alt<
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
  p1: Parser<T, R1>,
  p2: Parser<T, R2>,
  p3: Parser<T, R3>,
  p4: Parser<T, R4>,
  p5: Parser<T, R5>,
  p6: Parser<T, R6>,
  p7: Parser<T, R7>,
  p8: Parser<T, R8>,
  p9: Parser<T, R9>,
  p10: Parser<T, R10>,
  p11: Parser<T, R11>,
  p12: Parser<T, R12>,
  p13: Parser<T, R13>,
  p14: Parser<T, R14>,
  p15: Parser<T, R15>,
  p16: Parser<T, R16>
): Parser<
  T,
  | R1
  | R2
  | R3
  | R4
  | R5
  | R6
  | R7
  | R8
  | R9
  | R10
  | R11
  | R12
  | R13
  | R14
  | R15
  | R16
>

/**
 * Sequentially apply parsers until one succeeds.
 *
 * Fails if all parsers fail.
 *
 * @see {@linkcode Parser}
 *
 * @param {Parser[]} parsers - Token parsers
 * @return {Parser} Alternate parser
 */
function alt(...parsers: Parser[]): Parser {
  return { parse }

  /**
   * Sequentially apply parsers until one succeeds.
   *
   * @param {Token?} [token] - Current token
   * @return {ParserOutput} Parser output
   */
  function parse(token?: Token): ParserOutput {
    /**
     * Parse error.
     *
     * @var {ParseError | null | undefined} error
     */
    let error: ParseError | null | undefined

    // apply parsers until one is successful
    for (const parser of parsers) {
      /**
       * Current parser output.
       *
       * @const {ParserOutput} output
       */
      const output: ParserOutput = parser.parse(token)

      // get best parse error
      error = ParseError.best(error, output.error)

      // return output from first successful parse
      if (output.successful) {
        return out(output.successful, output.candidate, error)
      }
    }

    return out(false, null, error)
  }
}

export default alt
