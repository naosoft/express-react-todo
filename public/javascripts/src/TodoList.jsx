var React = require('react');
var TodoForm = require('./TodoForm.jsx');
var Todo = require('./Todo.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      data: [
        {
          task: 'buy milk',
          done: false
        },
        {
          task: 'solve rubics cube',
          done: true
        },
        {
          task: 'read newspaper',
          done: false
        }
      ]
    }
  },
  render: function () {
    return (
      <div>
        <TodoForm />
        <ul>
          {this.state.data.map(function (todo) {
            return (
              <Todo task={todo.task} done={todo.done} />
            );
          })}
        </ul>
      </div>
    );
  }
});
