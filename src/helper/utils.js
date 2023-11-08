const crypto = require('crypto');
const messages = require('./message');

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
  if (item == 'Login successfully' && data) {
    message.token = data;
  } else if (data) {
    message.data = data;
  }
  return res.status(statusCode).send(message);
};
