/**
 * @file Integration Tests - node
 * @module unist-util-parsec/combinators/tests/integration/node
 */

import Parser from '#tests/parser'
import { constant } from '@flex-development/tutils'
import { inspectNoColor } from '@flex-development/unist-util-inspect'
import type { TestContext } from 'vitest'

describe('integration:combinators/node', () => {
  beforeEach((ctx: TestContext): void => {
    ctx.expect.addSnapshotSerializer({
      print: (value: unknown): string => inspectNoColor(value),
      test: constant(true)
    })
  })

  it.each<string>([
    '(3.5 - 5 + (2 ** 2)) / .10 * true',
    '`fifteen is \\`${a + b}\\`, not \\`${2 * a + b}\\`.`',
    '0xdn false null 3 /(?<=(?<a>\\w){3})f/u "hello" undefined'
  ])('parser sample %#', file => {
    expect(new Parser(file).parse()).toMatchSnapshot()
  })
})
