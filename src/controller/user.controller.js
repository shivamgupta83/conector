const userModel = require('../models/user.model');
const { default: mongoose } = require('mongoose');
const { commonError } = require('../helper/common');
const { message_Response } = require('../helper/utils');
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, amount } = req.body;
    let createdData = await userModel.create(req.body);
    return message_Response(res, 400, "AddSuccess", 'User', true, createdData);
  } catch (error) {
    commonError(error);
    return res.status(500).send({ message: false, error: error.message });
  }
};
