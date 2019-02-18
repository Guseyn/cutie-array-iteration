'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents value
class Found extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  definedSyncCall () {
    return (array, iterator) => {
      return array.find(iterator)
    }
  }
}

module.exports = Found
