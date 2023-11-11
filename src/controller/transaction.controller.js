const { commonError } = require('../helper/common');
const { transaction } = require('../models/transaction.model');
const { AddSuccess } = require('../helper/error.message');
const { message_Response } = require('../helper/utils');

// exports.transaction = async (req, res) => {
//   try {
//     let {
//       userId,
//       Amount,
//       TransactionID,
//       TrnType,
//       TrnDescription,
//       TableID,
//       roundId,
//       gameId,
//       History,
//       isRoundFinished,
//       hash,
//       sessionId,
//       tableguid,
//     } = req.params;

//     let created = await transaction.create(req.params);
//     if (!created)
//       return message_Response(res, 500, CREATE_ERROR, 'Transaction', true, ' ');

//     return message_Response(res, 200, AddSuccess, 'Transaction', true, created);
//   } catch (error) {
//     commonError(error);
//     return message_Response(res, 500, SERVER_ERROR, '', true, created);
//   }
// };

exports.changeBalance = async (req, res) => {
  try {
    let {
      userId,
      Amount,
      TransactionID,
      TrnType,
      TrnDescription,
      roundId,
      gameId,
      sessionId,
      History,
      isRoundFinished,
      hash,
      TableGUID,
    } = req.params;

    if (!created)
      return message_Response(
        res,
        500,
        CREATE_ERROR,
        'Change balance',
        true,
        ' '
      );
    /*

Responce:-

RESULT
EXSYSTEMTRANSACTIONID
BALANCE
CODE
*/
    return message_Response(res, 200, addedSuccess, '', true, created);
  } catch (error) {
    commonError(error);
    return message_Response(res, 500, SERVER_ERROR, '', true, created);
  }
};

exports.getBalance = (req, res) => {};

exports.status = (req, res) => {
  try {
    /* Request:-
userId
casinoTransactionId
hash
TableGUID

Responce:-


result
EXSYSTEMTRANSACTIONID
code

  */
  } catch (error) {}
};
