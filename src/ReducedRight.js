'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Represents value
class ReducedRight extends AsyncObject {

  constructor(array, iterator) {
    super(array, iterator);
  }

  definedSyncCall() {
    return (array, iterator) => {
      return array.reduceRight(iterator);
    }
  }

}

module.exports = ReducedRight;
