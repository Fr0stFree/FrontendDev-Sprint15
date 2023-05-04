require('dotenv').config();
const path = require('path');

module.exports = {
  BASE_DIR: path.join(__dirname, ''),
  TOKEN_EXPIRATION: '7d',
  SECRET_KEY: process.env.SECRET_KEY || 'SOMETHING-REALLY-SECRET',
  MONGO_DNS: process.env.MONGO_DNS || 'mongodb://localhost:27017/mestodb',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  URL_PATTERN: /^https?:(www\.)?[a-zа-яё\d\-._~:/?#[\]@!$&'()*+,;=]+#?$/i,
};
