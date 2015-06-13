var React = require('react');

module.exports = React.createClass({
  toggleTodo: function () {
    var todo = { _id: this.props.id, task: this.props.task, done: !this.props.done }
    this.props.onTodoToggle(todo);
  },
  render: function () {
    return (
      <li>
        <span className={this.props.done ? "done" : ""}>{this.props.task}</span>
        <input type="checkbox" onClick={this.toggleTodo} /> Done

        {this.props.done.toString()}
      </li>
    );
  }
});
