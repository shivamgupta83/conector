const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
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
    phone: {
      type: String,
      trim: true,
    },
    amount: {
      type: Number,
      trim: true,
      default: 1000,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
