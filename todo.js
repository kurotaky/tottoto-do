require("./style.css");
require('./node_modules/bootstrap/dist/css/bootstrap.css');

import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/lib/Button";

var TodoApp = React.createClass({
  getInitialState: function() {
    return {todos: []};
  },
  onSubmit: function(form) {
    this.setState({todos: this.state.todos.concat(React.findDOMNode(form.todo).value)});
  },
  render: function() {
    return (
      <div className="TodoList">
        <h1>Tottoto Do</h1>
        <TodoForm onSubmit={this.onSubmit} />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todoNodes = this.props.todos.map(function (todo) {
      return (
        <li>
          {todo}
        </li>
      );
    });
    return (
        <ul className="TodoList">
          {todoNodes}
        </ul>
    );
  }
});


var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs);
  },
  render: function() {
    return (
        <form className="TodoForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="やるぞ!!!" ref="todo"/>
          <Button type="submit" bsStyle="info">
            追加
          </Button>
        </form>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById('todo'));
