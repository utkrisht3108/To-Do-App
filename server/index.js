const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 8000;

const Todo = require('./model/todoModel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todoDB', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log('hogaya');

todoRoutes.route('/').get((req, res) => {
  console.log('ok');
  Todo.find((err, el) => {
    if (err) {
      console.log(err);
    } else {
      res.json(el);
    }
  });
});

todoRoutes.route('/add').post((req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch((err) => {
      res.status(400).send('adding new todo failed');
    });
});

todoRoutes.route('/:id').get((req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

todoRoutes.route('/update/:id').post((req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (!todo) res.status(404).send('data is not found');
    else todo.description = req.body.description;
    todo.responsible = req.body.responsible;
    todo.priority = req.body.priority;
    todo.completed = req.body.completed;
    todo
      .save()
      .then((todo) => {
        res.json('Todo updated');
      })
      .catch((err) => {
        res.status(400).send('Update not possible');
      });
  });
});

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
