'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class IndexOf extends AsyncObject {

  constructor(array, elm) {
    super(array, elm);
  }

  definedSyncCall() {
    return (array, elm) => {
      return array.indexOf(elm);
    }
  }

}

module.exports = IndexOf;
