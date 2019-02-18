'use strict'

const { Assertion } = require('@cuties/assert')
const { IsArray } = require('@cuties/is')
const { Filtered } = require('./../index')

new Assertion(
  new IsArray(
    new Filtered([1, 2, 3], (value, index, array) => {})
  )
).call()
