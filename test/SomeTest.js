'use strict'

const { Assertion } = require('@cuties/assert');
const { IsBoolean } = require('@cuties/is');
const { Some } = require('./../index');

new Assertion(
  new IsBoolean(
    new Some([1, 2, 3], (value, index, array) => { return value === 1; })
  )
).call();
