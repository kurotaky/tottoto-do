require("./style.css");
require('./node_modules/bootstrap/dist/css/bootstrap.css');

import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/lib/Button";

var TodoApp = React.createClass({
  getInitialState: function() {
    return {todos: []};
  },
  onSubmit: function(todo) {
    this.setState({todos: this.state.todos.concat(todo.value)});
  },
  removeAll: function() {
    this.setState({todos: []});
  },
  render: function() {
    return (
      <div className="TodoList">
        <h1>Tottoto Do</h1>
        <TodoForm onSubmit={this.onSubmit} />
        <TodoList todos={this.state.todos} removeAll={this.removeAll}/>
      </div>
    );
  }
});

var TodoForm = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.todo);
    ReactDOM.findDOMNode(this.refs.todo).value = '';
  },
  render: function() {
    return (
        <form className="TodoForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="やること" ref="todo" required/>
          <Button type="submit" bsStyle="info">
            追加
          </Button>
        </form>
    );
  }
});

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },
  removeAll(e) {
    this.props.removeAll();
  },
  render: function() {
    var todoNodes = this.props.todos.map(function (todo, i) {
      return (
        <li key={"todo_" + i}>
          <label htmlFor={"todo_" + i}>
            <input type="checkbox" id={"todo_" + i}/>
            {todo}
          </label>
        </li>
      );
    });
    return (
      <ul className="TodoList">
        {todoNodes}
        <Button type="button" bsStyle="danger" onClick={this.removeAll}>ToDoを削除</Button>
      </ul>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById('todo'));
