const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');
const bcrypt = require('bcryptjs');

const { InvalidCredentials } = require('../core/errors');

const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.Email,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: mongoose.Schema.Types.Url,
    required: false,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
}, {
  versionKey: false,
});

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user) {
    throw new InvalidCredentials('Incorrect email or password');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new InvalidCredentials('Incorrect email or password');
  }
  return user;
};

module.exports = mongoose.model('user', userSchema);
