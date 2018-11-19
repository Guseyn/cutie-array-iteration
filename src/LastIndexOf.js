'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class lastIndexOf extends AsyncObject {

  constructor(array, elm, start) {
    super(array, elm, start);
  }

  definedSyncCall() {
    return (array, elm, start) => {
      return array.lastIndexOf(elm, start);
    }
  }

}

module.exports = lastIndexOf;
