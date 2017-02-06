"use strict";
var React = require('react');

var Item = React.createClass({
    toggle: function() {
        this.props.myClick(this.props.todo.date);
    },

    render: function() {
        return <li className="list-group-item pointer" onClick={this.toggle}>{this.props.todo.name}</li>;
    }
});

module.exports = Item;
