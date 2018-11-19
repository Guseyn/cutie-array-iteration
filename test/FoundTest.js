'use strict'

const { Assertion } = require('@cuties/assert');
const { IsNumber } = require('@cuties/is');
const { Found } = require('./../index');

new Assertion(
  new IsNumber(
    new Found([1, 2, 3], (value, index, array) => { return value === index + 1 })
  )
).call();
