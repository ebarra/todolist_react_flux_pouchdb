"use strict";
var React = require('react');
var Item = require("./item.jsx");

var List = React.createClass({
    render: function() {
        var items = this.props.todos.map(function(todo) {
            return <Item todo={todo} key={todo.date} myClick={this.props.manageClick}/>;
        }, this);
        return <ul className="list-group">
            {items}
        </ul>;
    }
});

module.exports = List;
