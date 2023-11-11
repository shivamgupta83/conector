const { commonError } = require('../helper/common');
const { message_Response, createHash } = require('../helper/utils');
const userModel = require('../models/user.model');

exports.authenticate = async (req, res, next) => {
  try {
    let { hash, SomeUniqueToken } = req.query;
    hash = createHash(SomeUniqueToken + process.env.PASS_KEY);

    if (!hash) {
      return message_Response(res, 400, 'Required', 'hash', false, '');
    }
    const generatedHash = createHash(SomeUniqueToken + process.env.PASS_KEY);
    if (!generatedHash)
      return message_Response(res, 400, 'SERVER_ERROR', '', false, '');

    if (generatedHash !== hash) {
      return message_Response(res, 403, 'NOAUTHENTICATION', '', false, '');
    } else {
      let userData = await userModel.findById(SomeUniqueToken);
      if (!userData) {
        return message_Response(res, 400, 'RETRIEVE_ERROR', 'User', false, '');
      } else {
        const response = {
          USERID: userData._id,
          USERNAME: userData.userName,
          FIRSTNAME: userData.firstName,
          LASTNAME: userData.lastname,
          EMAIL: userData.email,
          CURRENCY: userData.currency,
          BALANCE: userData.balance.toFixed(2),
        };
        return message_Response(
          res,
          200,
          'Authenticate',
          'User',
          true,
          response
        );
      }
    }
  } catch (error) {
    commonError(error);
    return message_Response(res, 500, 'SERVER_ERROR', '', false, '');
  }
};
