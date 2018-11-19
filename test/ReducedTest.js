'use strict'

const { Assertion } = require('@cuties/assert');
const { IsNumber } = require('@cuties/is');
const { Reduced } = require('./../index');

new Assertion(
  new IsNumber(
    new Reduced([1, 2, 3], (total, value, index, array) => { return total += value * 2; })
  )
).call();
