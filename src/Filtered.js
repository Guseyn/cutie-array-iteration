'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents array
class Filtered extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      return array.filter(iterator)
    }
  }
}

module.exports = Filtered
