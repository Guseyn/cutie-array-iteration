'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents boolean value
class Every extends AsyncObject {
  constructor (array, iterator) {
    super(array, iterator)
  }

  syncCall () {
    return (array, iterator) => {
      return array.every(iterator)
    }
  }
}

module.exports = Every
