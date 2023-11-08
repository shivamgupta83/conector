require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());
const { default: mongoose } = require('mongoose');
const route = require('./src/routes/routes');

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.log(err));

app.use('/', route);

app.listen(3000||process.env.PORT, function () {
  console.log('Express is running on Port ',process.env.PORT)
});