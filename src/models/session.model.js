const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const SessionSchema = new mongoose.Schema(
  {
    userId: {
      type: objectId,
      ref: 'User',
    },
    balance: {
      type: Number,
    },
    sessionId: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Session', SessionSchema);
