'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents array
class Filtered extends AsyncObject {

  constructor(array, iterator) {
    super(array, iterator);
  }

  definedSyncCall() {
    return (array, iterator) => {
      return array.filter(iterator);
    }
  }

}

module.exports = Filtered;
