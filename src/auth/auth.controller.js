const { commonError } = require('../helper/common');
const {
  NOAUTHENTICATION,
  SERVER_ERROR,
  Required,
} = require('../helper/error.message');
const { message_Response, createHash } = require('../helper/utils');
const userModel = require('../models/user.model');

exports.authenticate = async (req, res, next) => {
  try {
    const { hash, SomeUniqueToken } = req.params;
    if (!hash) {
      return message_Response(res, 400, Required, 'hash', false, '');
    }
    const generatedHash = createHash(SomeUniqueToken + process.env.PASS_KEY);
    if (!generatedHash)
      return message_Response(res, 400, SERVER_ERROR, '', false, '');
    if (generatedHash !== hash) {
      return message_Response(res, 403, NOAUTHENTICATION, '', false, '');
    } else {
      let userData = await userModel.findOne({ _id: SomeUniqueToken });
      if (!userData) {
        return message_Response(res, 400, RETRIEVE_ERROR, 'User', false, '');
      } else {
        const response = {
          USERID: userData._id,
          USERNAME: userData.userName,
          FIRSTNAME: userData.firstName,
          LASTNAME: userData.lastname,
          EMAIL: userData.email,
          CURRENCY: userData.currency,
          BALANCE: userData.balance,
        };
        return response;
      }
    }
  } catch (error) {
    commonError(error);
    return message_Response(res, 500, SERVER_ERROR, '', true, created);
  }
};
