const { CONFLICT } = require('http-status');

module.exports = class ObjectAlreadyExist extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT;
  }
};
