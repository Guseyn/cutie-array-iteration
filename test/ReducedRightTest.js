'use strict'

const { Assertion } = require('@cuties/assert')
const { IsNumber } = require('@cuties/is')
const { ReducedRight } = require('./../index')

new Assertion(
  new IsNumber(
    new ReducedRight([1, 2, 3], (total, value, index, array) => {
      total += value * 2
      return total
    })
  )
).call()
