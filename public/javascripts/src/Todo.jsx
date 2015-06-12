var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li>
        <span>{this.props.task}</span>
        <span>{this.props.done}</span>
      </li>
    );
  }
})
