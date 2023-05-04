const express = require('express');
const { celebrate } = require('celebrate');

const {
  get,
  getMe,
  list,
  updateInfo,
  updateAvatar,
} = require('../controllers/users');
const {
  getOneSchema,
  updateInfoSchema,
  updateAvatarSchema,
} = require('../schemas/users');

const router = express.Router();

router.get('/me', getMe);
router.get('/:userId', celebrate(getOneSchema), get);
router.get('/', list);
router.patch('/me', celebrate(updateInfoSchema), updateInfo);
router.patch('/me/avatar', celebrate(updateAvatarSchema), updateAvatar);

module.exports = router;
