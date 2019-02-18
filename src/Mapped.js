'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents array
class Mapped extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  definedSyncCall () {
    return (array, iterator) => {
      return array.map(iterator)
    }
  }
}

module.exports = Mapped
