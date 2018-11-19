'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class IndexOf extends AsyncObject {

  constructor(array, elm, start) {
    super(array, elm, start || 0);
  }

  definedSyncCall() {
    return (array, elm, start) => {
      return array.indexOf(elm, start);
    }
  }

}

module.exports = IndexOf;
