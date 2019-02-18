'use strict'

const { Assertion } = require('@cuties/assert')
const { IsArray } = require('@cuties/is')
const { ForEach } = require('./../index')

new Assertion(
  new IsArray(
    new ForEach([1, 2, 3], (value, index, array) => {})
  )
).call()
