var React = require('react');
var TodoForm = require('./TodoForm.jsx');
var Todo = require('./Todo.jsx');
var $ = jQuery = require('jquery');

module.exports = React.createClass({
  loadTodosFromServer: function () {
    $.ajax({
      context: this,
      url: '/todos',
      dataType: 'JSON',
      success: function (data) {
        this.setState({data: data})
      }
    });
  },
  componentDidMount: function () {
    this.loadTodosFromServer();
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
