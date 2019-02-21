'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Represents number
class lastIndexOf extends AsyncObject {
  constructor (array, item, start) {
    super(array, item, start)
  }

  syncCall () {
    return (array, item, start) => {
      return array.lastIndexOf(item, start)
    }
  }
}

module.exports = lastIndexOf
