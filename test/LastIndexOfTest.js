'use strict'

const { Assertion } = require('@cuties/assert');
const { IsNumber } = require('@cuties/is');
const { LastIndexOf } = require('./../index');

new Assertion(
  new IsNumber(
    new LastIndexOf([1, 2, 3], 1, 0)
  )
).call();
