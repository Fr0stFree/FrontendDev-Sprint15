const mongoose = require('mongoose');
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  CONFLICT,
} = require('http-status');

module.exports = async (err, req, res, next) => {
  let status = INTERNAL_SERVER_ERROR;
  if (Object.prototype.hasOwnProperty.call(err, 'statusCode')) {
    status = err.statusCode;
  } else if (err instanceof mongoose.Error.ValidationError
    || err instanceof mongoose.Error.CastError) {
    status = BAD_REQUEST;
  } else if (err.name === 'MongoServerError' && err.code === 11000) {
    status = CONFLICT;
  }
  return res.status(status).send({ message: err.message });
};
