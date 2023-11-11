const crypto = require('crypto');
const messages = require('./error.message');
const moment = require('moment');

exports.createHash = (text) => {
  return crypto.createHash('md5').update(text).digest('hex');
};

exports.AddedByOrEditedBy = (req, method) => {
  if (method == 'add') {
    return { date: moment.utc(), userId: req.user ? req.user._id : null };
  } else {
    return { date: moment.utc(), userId: req.user ? req.user._id : null };
  }
};

exports.message_Response = (res, statusCode, type, item, success, data) => {
  let message = {
    message: messages[type].replace(':item', item),
    success: success,
  };
  if (data) {
    message.data = data;
  }
  return res.status(statusCode).send(message);
};
