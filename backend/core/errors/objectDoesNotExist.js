const { NOT_FOUND } = require('http-status');

module.exports = class ObjectDoesNotExist extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND;
  }
};
