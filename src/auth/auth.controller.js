exports.authenticate = async (req, res, next) => {
  const requestHash = req.params.hash;
  const generatedHash = createHash(req.query.user_token + process.env.PASS_KEY);
  if (generatedHash !== requestHash) {
    return res.status(400).send({ status: false, message: 'not authenticate' });
  }
  next();
};