'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents array
class ForEach extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      array.slice().forEach(iterator)
      return array
    }
  }
}

module.exports = ForEach
