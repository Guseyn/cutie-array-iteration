'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents array
class ForEach extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  definedSyncCall () {
    return (array, iterator) => {
      array.forEach(iterator)
      return array
    }
  }
}

module.exports = ForEach
