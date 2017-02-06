"use strict";
var React = require('react');
var Item = require("./item.jsx");

var List = React.createClass({
    render: function() {
        var items = this.props.todos.map(function(todo) {
            return <Item todo={todo} key={todo.date} removeFunction={this.props.removeButton} myClick={this.props.manageClick}/>;
        }, this);
        return <div className="list-group">
            {items}
        </div>;
    }
});

module.exports = List;
