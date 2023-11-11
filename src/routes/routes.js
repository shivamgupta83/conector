const express = require('express');
const router = express.Router();
const { authenticate } = require('../auth/auth.controller');
const { createUser } = require('../controller/user.controller');
const {
  changeBalance,
  transaction,
  getBalance,
  status,
} = require('../controller/transaction.controller');

//1
//_______________________________________________________ AUTH ____________________________________________________

router.post('/auth', authenticate);


//_________________________________________________________ CHANGE BALANCE __________________________________________

router.get('/changeBalance', changeBalance);

// --> create transaction

//_________________________________________________________ STATUS __________________________________________

router.get('/status',status);

//_________________________________________________________ GET BALANCE __________________________________________

router.get('/getBalance', getBalance);

//_________________________________________________________ CREATE USER __________________________________________

router.post('/user/create', createUser);

module.exports = router;
