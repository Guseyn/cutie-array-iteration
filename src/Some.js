'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents boolean value
class Some extends AsyncObject {

  constructor(array, iterator) {
    super(array, iterator);
  }

  definedSyncCall() {
    return (array, iterator) => {
      return array.some(iterator);
    }
  }

}

module.exports = Some;
