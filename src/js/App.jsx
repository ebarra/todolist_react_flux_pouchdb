"use strict";

var React = require("react"),
    List = require("./list.jsx");

var App = React.createClass({
    getInitialState: function() {
        return {
            todos: []
        }
    },

    addItem: function(e){
      if(this._inputElement.value===""){
        return;
      }
      var itemArray = this.state.todos;

       itemArray.push(
         {
           name: this._inputElement.value,
           isComplete: false,
           date: Date.now()
         }
       );

       this.setState({
         todos: itemArray
       });

       this._inputElement.value = "";

       e.preventDefault();
    },

    toggleItem: function(key){
      var item = this.state.todos.find(function(x) { return x.date === key; });
      item.isComplete = !item.isComplete;
      //para repintar todo
      this.setState({
        todos: this.state.todos
      });
    },

    removeItem: function(key){
      var itemArray = this.state.todos;
      itemArray = itemArray.filter(function(el){
        return el.date !== key;
      });
      //para repintar todo
      this.setState({
        todos: itemArray
      });
    },

    renderList: function(complete) {
        return <List manageClick={this.toggleItem} removeButton={this.removeItem} todos={this.state.todos.filter(function(x) { return x.isComplete === complete; })} />;
    },

    render: function() {
        return <div className="container">
            <form onSubmit={this.addItem}>
                <input type="text" className="form-control kike" placeholder="Producto a comprar" ref={(a) => this._inputElement = a}></input>
                <button className="btn  btn-primary" type="submit">Añadir</button>
            </form>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="spacing-bottom">Lista de la compra</h3>
                    {this.renderList(false)}
                </div>
                <div className="col-md-6">
                    <h3 className="spacing-bottom">Ya comprados</h3>
                    {this.renderList(true)}
                </div>
            </div>

        </div>;
    }
});

module.exports = App;
