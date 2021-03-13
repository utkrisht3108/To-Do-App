const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 8000;

let Todo = require('./model/todoModel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todoDB', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log('hogaya');

