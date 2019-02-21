'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents value
class Reduced extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      return array.reduce(iterator)
    }
  }
}

module.exports = Reduced
