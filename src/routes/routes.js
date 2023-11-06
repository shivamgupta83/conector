const express = require('express');
const router = express.Router();
const crypto = require('crypto');
require('dotenv').config();
let method = 'login';

exports.createHash = (text) => {
  return crypto.createHash('md5').update(text).digest('hex');
};

router('/authentication', (req, res) => {

  const requestHash = req.params.hash;
  const generatedHash = createHash(req.query.user_token + process.env.PASS_KEY);
  if (generatedHash !== requestHash) {
    return res.status(400).send({ status: false, message: 'not authenticate' });
  }

  const decipher = crypto.createDecipher('aes-256-cbc', process.env.PASS_KEY);
  let decryptedData = decipher.update(generatedHash, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');

  let user_id = decryptedData.USERID;
  let username = decryptedData.USERNAME;
  let balance = Number.parseFloat(decryptedData.BALANCE) * 1000;
  let currency = decryptedData.CURRENCY;
  let gameSessionId = decryptedData.GAMESESSIONID;//8

//sestions -> userId,sessionId,balance
//transection-> 

  const QS = `method=${method}&Key=${key}&Time=${getCurrentTime()}&Username=${user_id}&CurrencyType=${'USD'}`;

  return {
    user_id,
    username,
    balance,
    currency,
    gameSessionId,
  };
});
router('/changeBalance', (req, res) => {
  let {
    userId,
    Amount,
    TransactionID,
    TrnType,
    TrnDescription,
    TableID,
    roundId,
    gameId,
    History,
    isRoundFinished,
    hash,
    sessionId,
    tableguid,
  } = req.params;



});

module.exports = router;

// ----------------------------------------------------------------------------------------------------------
function getCurrentTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const hours = ('0' + currentDate.getHours()).slice(-2);
  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
  const seconds = ('0' + currentDate.getSeconds()).slice(-2);
  return year + month + day + hours + minutes + seconds;
}
