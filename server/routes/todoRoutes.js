const express = require('express');
const todoController = require('./../controller/todoController');

const router = express.Router();

router.route('/').get(todoController.getTodo);
router.route('/add').post(todoController.addTodo);
router.route('/:id').get(todoController.getTodoId);
router.route('/update/:id').post(todoController.updateTodo);

module.exports = router;
