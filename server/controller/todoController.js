const fs = require('fs');
const Todo = require('./../model/todoModel');

exports.getTodo = (req, res) => {
  Todo.find((err, el) => {
    if (err) {
      console.log(err);
    } else {
      res.json(el);
    }
  });
};

exports.addTodo = (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: 'todo added successfully' });
    })
    .catch((err) => {
      res.status(400).send('adding new todo failed');
    });
};

exports.getTodoId = (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
};

exports.updateTodo = (req, res) => {
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
};
