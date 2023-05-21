const path = require('path');

const BASE_DIR = path.join(__dirname, '');

require('dotenv').config({ path: path.join(BASE_DIR, '../.env') });

module.exports = {
  BASE_DIR,
  TOKEN_EXPIRATION: '7d',
  NODE_ENV: process.env.NODE_ENV || 'dev',
  SECRET_KEY: process.env.SECRET_KEY || 'SOMETHING-REALLY-SECRET',
  MONGO_DNS: process.env.MONGO_DNS || 'mongodb://localhost:27017/mestodb',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  URL_PATTERN: /^https?:(www\.)?[a-zа-яё\d\-._~:/?#[\]@!$&'()*+,;=]+#?$/i,
};
