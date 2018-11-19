'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class lastIndexOf extends AsyncObject {

  constructor(array, elm) {
    super(array, elm);
  }

  definedSyncCall() {
    return (array, elm) => {
      return array.lastIndexOf(elm);
    }
  }

}

module.exports = lastIndexOf;
