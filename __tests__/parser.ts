/**
 * @file Tests - Parser
 * @module tests/parser
 */

import type {
  AnyBinaryExpression,
  ArithmeticOperator,
  AtomicExpression,
  BigIntLiteral,
  BinaryOperator,
  BitwiseBinaryOperator,
  BitwiseShiftOperator,
  BooleanLiteral,
  ConditionalExpression,
  EqualityOperator,
  Expression,
  ExpressionStatement,
  Identifier,
  LogicalOperator,
  NullLiteral,
  NumberLiteral,
  ParenthesizedExpression,
  RegExpLiteral,
  RelationalOperator,
  Root,
  SequenceExpression,
  Statement,
  StringLiteral,
  TemplateElement,
  TemplateLiteral,
  TemplatePlaceholder,
  UnaryExpression,
  UnaryOperator,
  UndefinedLiteral
} from '@flex-development/esast'
import { u } from '@flex-development/esast-util-builder'
import {
  keywords,
  Lexer,
  tt,
  types,
  type Token
} from '@flex-development/esast-util-from-code'
import { sift } from '@flex-development/tutils'
import {
  alt,
  apply,
  applyChildren,
  applyPosition,
  combine,
  condition,
  eat,
  eof,
  fail,
  kleft,
  kmid,
  kright,
  ksides,
  lazy,
  lrec,
  match,
  node,
  opt,
  rep,
  result,
  seq,
  succ,
  tok,
  until,
  val,
  type Runner,
  type TokenType as TT
} from '@flex-development/unist-util-parsec'
import type { MatchProperties, Type } from '@flex-development/unist-util-types'
import { chars } from '@flex-development/vfile-lexer'
import { ok } from 'devlop'
import type { Value, VFile } from 'vfile'
import type { PunctuatorToken } from './types'

/**
 * Test parser.
 *
 * @class
 */
class Parser {
  /**
   * Source file tokenizer.
   *
   * @see {@linkcode Lexer}
   *
   * @protected
   * @readonly
   * @instance
   * @member {Lexer} lexer
   */
  protected readonly lexer: Lexer

  /**
   * Create a new parser.
   *
   * @see {@linkcode VFile}
   * @see {@linkcode Value}
   *
   * @param {(Value | VFile | null)?} [file] - File to parse
   */
  constructor(file?: Value | VFile | null | undefined) {
    this.lexer = new Lexer(file)
  }

  /**
   * Get the ampersand (`&`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.ampersand}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Ampersand parser
   */
  public get ampersand(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.ampersand)
  }

  /**
   * Get the arithmetic operator parser.
   *
   * @see {@linkcode ArithmeticOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, ArithmeticOperator>} Arithmetic operator parser
   */
  public get arithmeticOperator(): Runner<TT, ArithmeticOperator> {
    return apply(alt(
      this.plus,
      this.minus,
      seq(this.asterisk, opt(this.nw(this.asterisk))),
      this.slash,
      this.percent
    ), value => {
      return <ArithmeticOperator>sift([value].flat()).reduce<string>((
        acc,
        token
      ) => acc + token.value!, '')
    })
  }

  /**
   * Get the asterisk (`*`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.asterisk}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Asterisk parser
   */
  public get asterisk(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.asterisk)
  }

  /**
   * Get the atomic expression parser.
   *
   * @see {@linkcode Expression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, AtomicExpression>} Atomic expression parser
   */
  public get atomicExpression(): Runner<TT, AtomicExpression> {
    return alt(
      this.bigint,
      this.boolean,
      this.null,
      this.number,
      this.regexp,
      this.string,
      this.undefined,
      this.templateLiteral,
      this.parenthesizedExpression,
      this.identifier
    )
  }

  /**
   * Get the backtick parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.backtick}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Backtick parser
   */
  public get backtick(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.backtick)
  }

  /**
   * Get the bar (`|`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.bar}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Bar parser
   */
  public get bar(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.bar)
  }

  /**
   * Get the bigint literal parser.
   *
   * @see {@linkcode BigIntLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, BigIntLiteral>} BigInt literal parser
   */
  public get bigint(): Runner<TT, BigIntLiteral> {
    return node(types.bigint, tok(tt.bigint), token => {
      ok(token.value !== null, 'expected token value')

      return {
        raw: token.value,
        // `BigInt(value)` throws if string contains numeric separators
        value: BigInt(token.value.slice(0, -1).replace(/_/g, '')).valueOf()
      }
    })
  }

  /**
   * Get the binary expression parser.
   *
   * @see {@linkcode AnyBinaryExpression}
   * @see {@linkcode Expression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Expression>} Maybe binary expression parser
   */
  public get binaryExpression(): Runner<TT, Expression> {
    /**
     * Expression parser.
     *
     * @const {Runner<TT, Expression>} x
     */
    const x: Runner<TT, Expression> = alt(
      this.unaryExpression,
      this.atomicExpression
    )

    return lrec<
      TT,
      AnyBinaryExpression | Expression,
      Expression,
      [[BinaryOperator, Type<AnyBinaryExpression>], Expression]
    >(
      x,
      seq(
        alt(
          apply(this.logicalOperator, operator => [
            operator,
            types.logicalExpression
          ]),
          apply(this.bitwiseBinaryOperator, operator => [
            operator,
            types.bitwiseExpression
          ]),
          apply(this.equalityOperator, operator => [
            operator,
            types.equalityExpression
          ]),
          apply(this.relationalOperator, operator => [
            operator,
            types.relationalExpression
          ]),
          apply(this.bitwiseShiftOperator, operator => [
            operator,
            types.bitwiseExpression
          ]),
          apply(this.arithmeticOperator, operator => [
            operator,
            types.arithmeticExpression
          ])
        ),
        x
      ),
      (left, [[operator, type], right]) => {
        return applyPosition(u(type, {
          children: applyChildren<AnyBinaryExpression>([left, right]),
          operator
        }))
      }
    )
  }

  /**
   * Get the bitwise binary operator parser.
   *
   * @see {@linkcode BitwiseBinaryOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, BitwiseBinaryOperator>} Bitwise binary operator parser
   */
  public get bitwiseBinaryOperator(): Runner<TT, BitwiseBinaryOperator> {
    return apply(alt(
      this.bar,
      this.caret,
      this.ampersand
    ), token => <BitwiseBinaryOperator>token.value)
  }

  /**
   * Get the bitwise shift operator parser.
   *
   * @see {@linkcode BitwiseShiftOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, BitwiseShiftOperator>} Bitwise shift operator parser
   */
  public get bitwiseShiftOperator(): Runner<TT, BitwiseShiftOperator> {
    return apply(combine(alt(this.leftAngle, this.rightAngle), result => {
      return seq(succ(result), condition(
        result.value === chars.lt,
        this.nw(this.leftAngle),
        seq(this.nw(this.rightAngle), opt(this.nw(this.rightAngle)))
      ))
    }), value => {
      return <BitwiseShiftOperator>sift(value.flat(2)).reduce<string>((
        acc,
        token
      ): string => acc += token.value, '')
    })
  }

  /**
   * Get the boolean literal parser.
   *
   * @see {@linkcode BooleanLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, BooleanLiteral>} Boolean literal parser
   */
  public get boolean(): Runner<TT, BooleanLiteral> {
    return node(types.boolean, alt(
      val<tt.keyid>(keywords.false),
      val<tt.keyid>(keywords.true)
    ), token => token.value === keywords.true)
  }

  /**
   * Get the caret (`^`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.caret}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Caret parser
   */
  public get caret(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.caret)
  }

  /**
   * Get the colon (`:`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.colon}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Colon parser
   */
  public get colon(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.colon)
  }

  /**
   * Get the comma (`,`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.comma}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Comma parser
   */
  public get comma(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.comma)
  }

  /**
   * Get the conditional expression parser.
   *
   * @see {@linkcode ConditionalExpression}
   * @see {@linkcode Expression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Expression>} Maybe conditional expression parser
   */
  public get conditionalExpression(): Runner<TT, Expression> {
    return lrec<
      TT,
      ConditionalExpression | Expression,
      Expression,
      [Expression, Expression]
    >(
      this.binaryExpression,
      kright(this.question, ksides(
        this.disjoinedExpression,
        this.colon,
        this.disjoinedExpression
      )),
      (left, right) => {
        return applyPosition(u(types.conditionalExpression, {
          children: applyChildren<ConditionalExpression>([left, right])
        }))
      }
    )
  }

  /**
   * Get the disjoined expression parser.
   *
   * @see {@linkcode Expression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Expression>} Disjoined expression parser
   */
  public get disjoinedExpression(): Runner<TT, Expression> {
    return lazy(() => this.conditionalExpression)
  }

  /**
   * Get the dollar sign (`$`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.dollar}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Dollar sign parser
   */
  public get dollar(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.dollar)
  }

  /**
   * Get the equal sign (`=`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.equal}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Equal sign parser
   */
  public get equal(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.equal)
  }

  /**
   * Get the equality operator parser.
   *
   * @see {@linkcode EqualityOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, EqualityOperator>} Equality operator parser
   */
  public get equalityOperator(): Runner<TT, EqualityOperator> {
    return apply(seq(
      alt(this.exclamation, this.equal),
      this.nw(this.equal),
      opt(this.nw(this.equal))
    ), value => {
      return <EqualityOperator>sift(value.flat()).reduce<string>((
        acc,
        token
      ) => acc + token.value!, '')
    })
  }

  /**
   * Get the exclamation mark (`!`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.exclamation}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Exclamation mark parser
   */
  public get exclamation(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.exclamation)
  }

  /**
   * Get the expression parser.
   *
   * @see {@linkcode Expression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Expression>} Expression parser
   */
  public get expression(): Runner<TT, Expression> {
    return lazy(() => this.sequenceExpression)
  }

  /**
   * Get the expression statement parser.
   *
   * @see {@linkcode ExpressionStatement}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, ExpressionStatement>} Expression statement parser
   */
  public get expressionStatement(): Runner<TT, ExpressionStatement> {
    return node(types.expressionStatement, seq(
      this.expression,
      opt(kleft(succ(null), this.semicolon))
    ))
  }

  /**
   * Get the identifier parser.
   *
   * @see {@linkcode Identifier}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Identifier>} Identifier parser
   */
  public get identifier(): Runner<TT, Identifier> {
    return node(types.identifier, tok(tt.keyid), token => {
      ok(token.value !== null, 'expected token value')

      /**
       * Identifier node properties.
       *
       * @const {MatchProperties<Identifier>} properties
       */
      const properties: MatchProperties<Identifier> = {
        name: token.value
      }

      // mark private identifiers
      if (token.value.startsWith(chars.hash)) properties.private = true

      return properties
    })
  }

  /**
   * Get the left angle (`<`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.lt}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Left angle parser
   */
  public get leftAngle(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.lt)
  }

  /**
   * Get the left brace (`{`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.leftBrace}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Left brace parser
   */
  public get leftBrace(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.leftBrace)
  }

  /**
   * Get the left parenthesis (`(`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.leftParen}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Left parenthesis parser
   */
  public get leftParen(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.leftParen)
  }

  /**
   * Get the logical operator parser.
   *
   * @see {@linkcode LogicalOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, LogicalOperator>} Logical operator parser
   */
  public get logicalOperator(): Runner<TT, LogicalOperator> {
    return apply(alt(
      seq(this.question, this.nw(this.question)),
      seq(this.bar, this.nw(this.bar)),
      seq(this.ampersand, this.nw(this.ampersand))
    ), value => {
      return <LogicalOperator>value.flat().reduce<string>((acc, token) => {
        return acc + token.value!
      }, '')
    })
  }

  /**
   * Get the minus sign (`-`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.minus}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Minus sign parser
   */
  public get minus(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.minus)
  }

  /**
   * Get the null literal parser.
   *
   * @see {@linkcode NullLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, NullLiteral>} Null literal parser
   */
  public get null(): Runner<TT, NullLiteral> {
    return node(types.null, val<tt.keyid>(keywords.null), () => null)
  }

  /**
   * Get the number literal parser.
   *
   * @see {@linkcode NumberLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, NumberLiteral>} Number literal parser
   */
  public get number(): Runner<TT, NumberLiteral> {
    return node(types.number, tok(tt.number), token => {
      ok(token.value !== null, 'expected token value')
      return { raw: token.value, value: this.applyNumber(token) }
    })
  }

  /**
   * Get the parenthesized expression parser.
   *
   * @see {@linkcode ParenthesizedExpression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, ParenthesizedExpression>} Parenthesized expression
   * parser
   */
  public get parenthesizedExpression(): Runner<TT, ParenthesizedExpression> {
    return node(types.parenthesizedExpression, kmid(
      this.leftParen,
      this.expression,
      this.rightParen
    ))
  }

  /**
   * Get the percent sign (`%`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.percent}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Percent sign parser
   */
  public get percent(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.percent)
  }

  /**
   * Get the plus sign (`+`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.plus}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Plus sign parser
   */
  public get plus(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.plus)
  }

  /**
   * Get the question mark (`?`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.question}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Question mark parser
   */
  public get question(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.question)
  }

  /**
   * Get the regular expression literal parser.
   *
   * @see {@linkcode RegExpLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, RegExpLiteral>} Regular expression literal parser
   */
  public get regexp(): Runner<TT, RegExpLiteral> {
    return node(types.regexp, seq(
      kmid(
        this.slash,
        until(eat(), this.unescaped(this.slash)),
        this.slash
      ),
      opt(this.nw(match(/^[a-z]+/i)))
    ), value => {
      /**
       * Regular expresion flags.
       *
       * @const {string} flags
       */
      const flags: string = value[1]?.value ?? ''

      /**
       * Regular expression pattern.
       *
       * @const {string} pattern
       */
      const pattern: string = value[0].reduce((acc, token) => {
        return acc + (token.whitespace ?? '') + token.value!
      }, '')

      return {
        flags,
        pattern,
        value: chars.slash + pattern + chars.slash + flags
      }
    })
  }

  /**
   * Get the relational operator parser.
   *
   * @see {@linkcode RelationalOperator}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, RelationalOperator>} Relational operator parser
   */
  public get relationalOperator(): Runner<TT, RelationalOperator> {
    return apply(alt(
      seq(alt(this.leftAngle, this.rightAngle), opt(this.nw(this.equal))),
      val<tt.keyid>(keywords.in),
      val<tt.keyid>(keywords.instanceof)
    ), value => {
      return <RelationalOperator>sift([value].flat(2)).reduce<string>((
        acc,
        token
      ) => acc + token.value!, '')
    })
  }

  /**
   * Get the right angle (`>`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.gt}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Right angle parser
   */
  public get rightAngle(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.gt)
  }

  /**
   * Get the right brace (`}`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.rightBrace}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Right brace parser
   */
  public get rightBrace(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.rightBrace)
  }

  /**
   * Get the right parenthesis (`)`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.rightParen}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Right parenthesis parser
   */
  public get rightParen(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.rightParen)
  }

  /**
   * Get the root parser.
   *
   * @see {@linkcode Root}
   *
   * @return {Runner<TT, Root>} Root parser
   */
  public get root(): Runner<TT, Root> {
    return node(types.root, kmid(
      tok(tt.sof),
      rep(lazy(token => {
        return condition(token!.type === tt.eof, fail(), this.statement)
      })),
      tok(tt.eof)
    ))
  }

  /**
   * Get the semicolon (`;`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.semicolon}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Semicolon parser
   */
  public get semicolon(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.semicolon)
  }

  /**
   * Get the sequence expression parser.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode SequenceExpression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, Expression>} Maybe sequence expression parser
   */
  public get sequenceExpression(): Runner<TT, Expression> {
    return node(seq(
      this.disjoinedExpression,
      rep(kright(this.comma, this.disjoinedExpression))
    ), value => {
      /**
       * Expression node.
       *
       * @var {Expression} node
       */
      let node: Expression = value[0]

      // apply sequence expression
      if (value[1].length) {
        node = applyPosition(u(types.sequenceExpression, {
          children: applyChildren<SequenceExpression>(<never>value)
        }))
      }

      return node
    })
  }

  /**
   * Get the forward slash (`/`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.slash}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Forward slash parser
   */
  public get slash(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.slash)
  }

  /**
   * Get the statement parser.
   *
   * @see {@linkcode Statement}
   *
   * @return {Runner<TT, Statement>} Statement parser
   */
  public get statement(): Runner<TT, Statement> {
    return this.expressionStatement
  }

  /**
   * Get the string literal parser.
   *
   * @see {@linkcode StringLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, StringLiteral>} String literal parser
   */
  public get string(): Runner<TT, StringLiteral> {
    return node(types.string, tok(tt.string), token => {
      ok(token.value !== null, 'expected token value')

      /**
       * Unterminated string check.
       *
       * @const {boolean} ut
       */
      const ut: boolean = !token.value.endsWith(chars.apostrophe) &&
        !token.value.endsWith(chars.quotation)

      return {
        raw: token.value,
        value: token.value.slice(1, ut ? token.value.length : -1)
      }
    })
  }

  /**
   * Get the template element parser.
   *
   * @see {@linkcode TemplateElement}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, TemplateElement>} Template element parser
   */
  public get templateElement(): Runner<TT, TemplateElement> {
    return node(until(
      eat(),
      this.unescaped(alt(seq(this.dollar, this.leftBrace), this.backtick))
    ), (value, range) => {
      /**
       * Template element node.
       *
       * @const {TemplateElement} node
       */
      const node: TemplateElement = u(types.templateElement, {
        value: value.reduce((acc, token) => {
          return acc + (token.whitespace ?? '') + token.value!
        }, '') + (range[1]!.whitespace ?? '')
      })

      return applyPosition(node, range, true)
    })
  }

  /**
   * Get the template literal parser.
   *
   * @see {@linkcode TemplateLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, TemplateLiteral>} Template literal parser
   */
  public get templateLiteral(): Runner<TT, TemplateLiteral> {
    return node(types.templateLiteral, kmid(
      this.backtick,
      until(alt(this.templatePlaceholder, this.templateElement), this.backtick),
      this.backtick
    ))
  }

  /**
   * Get the template placeholder parser.
   *
   * @see {@linkcode TemplatePlaceholder}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, TemplatePlaceholder>} Template placeholder parser
   */
  public get templatePlaceholder(): Runner<TT, TemplatePlaceholder> {
    return node(types.templatePlaceholder, kright(
      this.dollar,
      kmid(this.leftBrace, this.expression, this.rightBrace)
    ), value => ({
      children: applyChildren<TemplatePlaceholder>(value),
      typeOnly: false
    }))
  }

  /**
   * Get the tilde (`~`) parser.
   *
   * @see {@linkcode PunctuatorToken}
   * @see {@linkcode chars.tilde}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, PunctuatorToken>} Tilde parser
   */
  public get tilde(): Runner<TT, PunctuatorToken> {
    return val<tt.punctuator>(chars.tilde)
  }

  /**
   * Get the unary expression parser.
   *
   * @see {@linkcode UnaryExpression}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, UnaryExpression>} Unary expression parser
   */
  public get unaryExpression(): Runner<TT, UnaryExpression> {
    return node(types.unaryExpression, kright(
      alt(
        val(keywords.delete),
        val(keywords.typeof),
        val(keywords.void),
        this.exclamation,
        this.minus,
        this.plus,
        this.tilde
      ),
      this.atomicExpression
    ), (value, [head]) => ({
      children: applyChildren<UnaryExpression>(value),
      operator: <UnaryOperator>head!.value
    }))
  }

  /**
   * Get the undefined literal parser.
   *
   * @see {@linkcode UndefinedLiteral}
   *
   * @public
   * @instance
   *
   * @return {Runner<TT, UndefinedLiteral>} Undefined literal parser
   */
  public get undefined(): Runner<TT, UndefinedLiteral> {
    return node(types.undefined, val<tt.keyid>(keywords.undefined), () => ({
      value: undefined
    }))
  }

  /**
   * Convert `token` to a number.
   *
   * @see {@linkcode NumberLiteral.value}
   * @see {@linkcode Token}
   *
   * @protected
   * @instance
   *
   * @param {Token<tt.number>} token - Token to convert
   * @return {NumberLiteral['value']} Node value
   */
  protected applyNumber(token: Token<tt.number>): NumberLiteral['value'] {
    /**
     * Value to convert.
     *
     * @var {string} value
     */
    let value: string = token.value!.replace(/_/g, '')

    switch (true) {
      case /^0b/i.test(value):
        return Number.parseInt(value, 2)
      case /^0e/i.test(value):
        return Number.parseInt(value, 8)
      case /^0x/i.test(value):
        return Number.parseInt(value, 16)
      default:
        return Number.parseFloat(value)
    }
  }

  /**
   * Forbid leading whitespace.
   *
   * @protected
   * @instance
   *
   * @template {any} R - Parse candidate result
   *
   * @param {Runner<TT, R>} x - Parser to apply
   * @return {typeof x} No whitespace parser
   */
  protected nw<R>(x: Runner<TT, R>): typeof x {
    return combine(x, (result, [head]) => {
      return condition(head?.whitespace, fail(), succ(result))
    })
  }

  /**
   * Parse the source file to an abstract syntax tree.
   *
   * @see {@linkcode Root}
   *
   * @public
   * @instance
   *
   * @return {Root} esast
   */
  public parse(): Root {
    return result(eof(this.root.parse(this.lexer.head)))
  }

  /**
   * Forbid a leading backslash.
   *
   * @protected
   * @instance
   *
   * @template {any} R - Parse candidate result
   *
   * @param {Runner<TT, R>} x - Parser to apply
   * @return {typeof x} Unescaped parser
   */
  protected unescaped<R>(x: Runner<TT, R>): typeof x {
    return combine(x, (value, [head]) => {
      return condition(
        head?.previous?.value === chars.backslash,
        fail(),
        succ(value)
      )
    })
  }
}

export default Parser
