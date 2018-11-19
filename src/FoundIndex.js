'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents number
class FoundIndex extends AsyncObject {

  constructor(array, iterator) {
    super(array, iterator);
  }

  definedSyncCall() {
    return (array, iterator) => {
      return array.findIndex(iterator);
    }
  }

}

module.exports = FoundIndex;
