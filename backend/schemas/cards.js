const { Joi } = require('celebrate');
const { URL_PATTERN } = require('../config');

const createSchema = {
  body: Joi.object().keys({
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30),
    link: Joi
      .string()
      .required()
      .pattern(URL_PATTERN),
  }),
};

const getOneSchema = {
  params: Joi.object().keys({
    cardId: Joi
      .string()
      .required()
      .hex()
      .length(24),
  }),
};

module.exports = {
  createSchema,
  getOneSchema,
};
