'use strict'

const { Assertion } = require('@cuties/assert');
const { IsBoolean } = require('@cuties/is');
const { Every } = require('./../index');

new Assertion(
  new IsBoolean(
    new Every([1, 2, 3], (value, index, array) => { return value > 0; })
  )
).call();
