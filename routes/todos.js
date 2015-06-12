var express = require('express');
var router = express.Router();
var Todo = require('../app/models/todo');

router.route('/')
  .get(function (req, res) {
    Todo.find(function (err, todos) {
      if (err) {
        res.send(err);
      }

      res.json(todos);
    })
  })
  .post(function (req, res) {
    var todo = new Todo({ task: req.body.task });

    todo.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.status(201).json({ message: 'created' })
    });
  });

module.exports = router;
