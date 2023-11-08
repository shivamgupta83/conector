const { NOAUTHENTICATION } = require('../helper/error.message');
const { message_Response } = require('../helper/utils');
// exports.message_Response = (res, statusCode, type, item, success, data) => {

exports.authenticate = async (req, res, next) => {
  const requestHash = req.params.hash;
  const generatedHash = createHash(req.query.user_token + process.env.PASS_KEY);
  if (generatedHash !== requestHash) {
    message_Response(res, 403, NOAUTHENTICATION, '', false, '');
  } else {
    next();
  }
};
