var React = require('react');

module.exports = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var taskInput = React.findDOMNode(this.refs.task);
    var taskValue = taskInput.value.trim();
    if (taskValue !== '') {
      this.props.onTodoSubmit({ task: taskValue });

      taskInput.value = '';
    }

  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit} className="todo-input">
        <input type="text" placeholder="What do you need to do?" ref="task" />
        <input type="submit" value="Create" />
      </form>
    );
  }
});
