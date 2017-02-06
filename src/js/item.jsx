"use strict";
var React = require('react');

var Item = React.createClass({
    toggle: function() {
        this.props.myClick(this.props.todo.date);
    },

    remove: function(){
        this.props.removeFunction(this.props.todo.date);
    },

    render: function() {
        return <div className="list-group-item">
          {this.props.todo.name}
          <div className="pull-right" role="group">
            <button className="btn btn-xs btn-success img-circle" onClick={this.toggle}>✓</button> &nbsp;
            <button className="btn btn-xs btn-danger img-circle" onClick={this.remove}>Ｘ</button>
          </div>
        </div>;
    }
});

module.exports = Item;
