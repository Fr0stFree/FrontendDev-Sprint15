const { UNAUTHORIZED } = require('http-status');

module.exports = class InvalidCredentials extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED;
  }
};
