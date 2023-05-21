const mongoose = require('mongoose');
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} = require('http-status');

const { NODE_ENV } = require('../config');

module.exports = async (err, req, res, next) => {
  let status = INTERNAL_SERVER_ERROR;
  let { message } = err;
  if (Object.prototype.hasOwnProperty.call(err, 'statusCode')) {
    status = err.statusCode;
  } else if (err instanceof mongoose.Error.ValidationError
    || err instanceof mongoose.Error.CastError) {
    status = BAD_REQUEST;
    message = Object.values(err.errors).map((error) => error.message).join(', ');
  }
  if (status === INTERNAL_SERVER_ERROR && NODE_ENV.startsWith('prod')) {
    message = 'Произошла ошибка';
  }
  return res.status(status).send({ message });
};
