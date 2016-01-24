require("./style.css");
require('./node_modules/bootstrap/dist/css/bootstrap.css');

import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/lib/Button";

var TodoList = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <div className="TodoList">
        <h1>Tottoto Do</h1>
        <form className="TodoForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="やるぞ!!!" ref="text"/>
          <Button type="submit" bsStyle="info">
            hogehoge
          </Button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoList />, document.getElementById('todo'));
