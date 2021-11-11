const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = express.Router();
const path = require("path");
const cors = require('cors'); 
const indexRoute = require('./routes/index')
const bookRoute = require('./routes/book')

dotenv.config();

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use(express.static('./public'))
app.set("view engine","ejs");

// app.use('/',indexRoute);
app.use('/',bookRoute);

const uri = process.env.MONGO_URL;

mongoose.connect(
  uri,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DataBase");
  }
);

app.listen(3030, () => {
  console.log("server running at 3030");
});