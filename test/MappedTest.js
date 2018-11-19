'use strict'

const { Assertion } = require('@cuties/assert');
const { IsArray } = require('@cuties/is');
const { Mapped } = require('./../index');

new Assertion(
  new IsArray(
    new Mapped([1, 2, 3], (value, index, array) => { return value * 2; })
  )
).call();
