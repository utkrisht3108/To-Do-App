const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  responsible: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

