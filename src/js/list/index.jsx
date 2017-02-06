"use strict";

var Item = require("./item");

module.exports = React.createClass({
    renderItems: function() {
        return this.props.todos.map(function(todo) {
            return <Item todo={todo} />;
        });
    },

    render: function() {
        return <ul className="list-group">
            {this.renderItems()}
        </ul>;
    }
});
