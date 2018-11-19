'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class IndexOf extends AsyncObject {

  constructor(array, item, start) {
    super(array, item, start || 0);
  }

  definedSyncCall() {
    return (array, item, start) => {
      return array.indexOf(item, start);
    }
  }

}

module.exports = IndexOf;
