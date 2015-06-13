var React = require('react');
var TodoForm = require('./TodoForm.jsx');
var Todo = require('./Todo.jsx');
var $ = jQuery = require('jquery');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      data: []
    }
  },
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
  createTodo: function (todo) {
    var todos = this.state.data;
    todos.push(todo)
    this.setState({data: todos}, function () {
      $.ajax({
        context: this,
        url: '/todos',
        dataType: 'JSON',
        type: 'POST',
        data: todo,
        success: function () {
          this.setState({data: todos});
        }
      });
    });
  },
  toggleTodo: function (todo) {
    var todos = this.state.data;
    var index = todos.map(function (item) {
      return item._id
    }).indexOf(todo._id);
    todos[index] = todo;

    $.ajax({
      context: this,
      url: '/todos/' + todo._id,
      type: 'PATCH',
      dateType: 'JSON',
      data: {done: todo.done},
      success: function () {
        this.setState({data: todos});
      }
    });
  },
  componentDidMount: function () {
    this.loadTodosFromServer();
  },
  render: function () {
    return (
      <div>
        <TodoForm onTodoSubmit={this.createTodo} />
        <ul>
          {this.state.data.map(function (todo, i) {
            var boundToggle = this.toggleTodo;
            return (
              <Todo
                key={todo._id}
                id={todo._id}
                task={todo.task}
                done={todo.done}
                onTodoToggle={boundToggle}
               />
            );
          }, this)}
        </ul>
      </div>
    );
  }
});
