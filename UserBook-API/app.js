const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  });

app.use(bodyParser.json());


app.use('/api/v1/user', userRoutes);


app.listen(1111, () => {
  console.log(`App is running`);
});
