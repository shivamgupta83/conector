const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    currency: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    balance: {
      type: Number,
      trim: true,
      default: 1000,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
