const { commonError } = require('../helper/common');
const { transaction } = require('../models/transaction.model');
exports.transaction = async (req, res) => {
  try {
    let {
      userId,
      Amount,
      TransactionID,
      TrnType,
      TrnDescription,
      TableID,
      roundId,
      gameId,
      History,
      isRoundFinished,
      hash,
      sessionId,
      tableguid,
    } = req.params;

    let created = await transaction.create(req.params);

    return res.status(400).send({ status: true, Data: created });
  } catch (error) {
    commonError(error);
    return res.status(500);
  }
};



exports.changeBalance= (req,res)=>{

}


exports.getBalance = (req,res)=>{
  
}