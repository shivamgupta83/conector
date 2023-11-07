const userModel = require('../models/user.model');
const { default: mongoose } = require('mongoose');
const { commonError } = require('../helper/common');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone, amount } = req.body;
    let createdData = await userModel.create(req.body);
    return res.status(200).send({ Data: createdData });
  } catch (error) {
    commonError(error);
    return res.status(500).send({ message: false, error: message.error });
  }
};
