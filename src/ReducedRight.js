'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents value
class ReducedRight extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      return array.reduceRight(iterator)
    }
  }
}

module.exports = ReducedRight
