const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const TodoRoutes = require('./routes/todoRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/todos', TodoRoutes);

module.exports = app;
