const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/auth.controller');
const { createUser } = require('../controller/user.controller');
const {
  changeBalance,
  transaction,
  getBalance,
} = require('../controller/transaction.controller');

router.get('/auth', authenticate);

router.get('/changeBalance', changeBalance);

router.get('/transaction', transaction);

router.get('/status');

router.get('/getBalance', getBalance);

router.post('/user/create', createUser);

module.exports = router;