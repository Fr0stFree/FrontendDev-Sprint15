const express = require('express');

const { ObjectDoesNotExist } = require('../core/errors');
const { auth } = require('../middleware');

const router = express.Router();

router.use('/', require('./auth'));
router.use('/users', auth, require('./users'));
router.use('/cards', auth, require('./cards'));

router.use((req, res, next) => next(new ObjectDoesNotExist(`Page '${req.url}' does not exist`)));

module.exports = router;
