const { FORBIDDEN } = require('http-status');

module.exports = class PermissionDenied extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN;
  }
};
