const express = require('express');
const { celebrate } = require('celebrate');

const {
  create,
  list,
  remove,
  like,
  dislike,
} = require('../controllers/cards');
const {
  createSchema,
  getOneSchema,
} = require('../schemas/cards');

const router = express.Router();

router.get('/', list);
router.post('/', celebrate(createSchema), create);
router.delete('/:cardId', celebrate(getOneSchema), remove);
router.put('/:cardId/likes', celebrate(getOneSchema), like);
router.delete('/:cardId/likes', celebrate(getOneSchema), dislike);

module.exports = router;
