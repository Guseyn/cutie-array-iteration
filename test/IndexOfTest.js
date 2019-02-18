'use strict'

const { Assertion } = require('@cuties/assert')
const { IsNumber } = require('@cuties/is')
const { IndexOf } = require('./../index')

new Assertion(
  new IsNumber(
    new IndexOf([1, 2, 3], 1, 0)
  )
).call()
