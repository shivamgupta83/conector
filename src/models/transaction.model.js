const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: objectId,
      ref: 'User',
    },
    amount: {
      type: Number,
    },
    transactionId: {
      type: String,
    },
    trnType: {
      type: String,
    },
    trnDescription: {
      type: String,
    },
    round_id: {
      type: String,
    },
    gameId: {
      type: String,
    },
    sessionId: {
      type: String,
    },
    history: {
      type: String,
    },
    isRoundFinished: {
      type: Boolean,
    },
    hash: {
      type: String,
    },
    tableGUID: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Transaction', TransactionSchema);
