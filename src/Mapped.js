'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents array
class Mapped extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      return array.map(iterator)
    }
  }
}

module.exports = Mapped
