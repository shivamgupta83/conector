const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/auth.controller');
const { createUser } = require('../controller/user.controller');
const {
  changeBalance,
  transaction,
  getBalance,
} = require('../controller/transaction.controller');

//_______________________________________________________ AUTH ____________________________________________________

router.get('/auth', authenticate);

//_________________________________________________________ CHANGE BALANCE __________________________________________

router.get('/changeBalance', changeBalance);

//_________________________________________________________ TRANSACTION __________________________________________

router.get('/transaction', transaction);

//_________________________________________________________ STATUS __________________________________________

router.get('/status');

//_________________________________________________________ GET BALANCE __________________________________________

router.get('/getBalance', getBalance);

//_________________________________________________________ CREATE USER __________________________________________

router.post('/user/create', createUser);

module.exports = router;
