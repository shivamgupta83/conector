const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/auth.controller');
const { createUser } = require('../controller/user.controller');
const {
  changeBalance,
  getBalance,
  status,
} = require('../controller/transaction.controller');

//_______________________________________________________ AUTH ____________________________________________________

router.post('/Authenticate', authenticate);

//_________________________________________________________ CHANGE BALANCE __________________________________________

router.post('/BetWin', changeBalance);

//_________________________________________________________ STATUS __________________________________________

router.get('/Status', status);

//_________________________________________________________ GET BALANCE __________________________________________

router.get('/GetBAlance', getBalance);

//_________________________________________________________ CREATE USER __________________________________________

router.post('/user/create', createUser);

module.exports = router;
