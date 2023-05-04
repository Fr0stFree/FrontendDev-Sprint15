const { Joi } = require('celebrate');
const { URL_PATTERN } = require('../config');

const registerSchema = {
  body: Joi.object().keys({
    email: Joi
      .string()
      .required()
      .email()
      .lowercase(),
    password: Joi
      .string()
      .required()
      .min(8),
    name: Joi
      .string()
      .optional()
      .min(2)
      .max(30),
    about: Joi
      .string()
      .optional()
      .min(2)
      .max(30),
    avatar: Joi
      .string()
      .optional()
      .pattern(URL_PATTERN),
  }),
};

const loginSchema = {
  body: Joi.object().keys({
    email: Joi
      .string()
      .required()
      .email()
      .lowercase(),
    password: Joi
      .string()
      .required()
      .min(8),
  }),
};

module.exports = {
  registerSchema,
  loginSchema,
};
