"use strict";

var React = require("react"),
    List = require("./list.jsx");

var App = React.createClass({
    getInitialState: function() {
        return {
            list: []
        }
    },

    componentDidMount: function(){
      this.props.localDB.changes({
        since: "now",
        live: true,
        include_docs: true
      }).on('change', this.handleLocalDBChange)
        .on('complete', console.log.bind(console, '[Change:Complete]'))
        .on('error', console.log.bind(console, '[Change:Error]'));

        this.redrawUI();
    },

    redrawUI: function(){
      var self = this;
      this.props.localDB.allDocs({include_docs: true, descending: true}, function(err, doc) {
        //sacamos con un map solo los documentos, no _id, _rev, etc que viene en las rows
        var onlydocs = doc.rows.map(function(x) {
           return x.doc;
        });
        self.setState({
          list: onlydocs
        });
      });
    },

    handleLocalDBChange: function(change){
      console.log('handleLocalDBChange', change);

      var doc = change.doc;
      if (!doc) {
        return;
      }
      /* //opción 1, si hay un cambio lo meto en el estado y hago setstate
      if (doc._deleted) {
        this.setState({
          docs: this.state.list.filter(tmpdoc => tmpdoc._id !== doc._id)
        });
      } else {
        this.setState({
          list: this.state.list.concat(doc)
        });
      }
      */
      //opción 2, sea cual sea el cambio me traigo todo de la db
      this.redrawUI();
    },

    addItem: function(e){
      if(this._inputElement.value===""){
        return;
      }
      /*
      var itemArray = this.state.list;

       itemArray.push(
         {
           name: this._inputElement.value,
           isComplete: false,
           date: Date.now()
         }
       );

       this.setState({
         list: itemArray
       });
       */
       var item = {
          _id: new Date().toISOString(),
          name: this._inputElement.value,
          isComplete: false,
          date: Date.now()
        };
      this.props.localDB.put(item, function callback(err, result) {
        if (!err) {
          console.log('Successfully posted a item!');
        }
      });

       this._inputElement.value = "";

       e.preventDefault();
    },

    toggleItem: function(key){
      var item = this.state.list.find(function(x) { return x.date === key; });
      item.isComplete = !item.isComplete;
      //para repintar todo guardamos en la bbdd, cuando se cambie llegará un evento change y se repinta solo
      this.props.localDB.put(item);
    },

    removeItem: function(key){
      var item = this.state.list.find(function(x) { return x.date === key; });
      this.props.localDB.remove(item);
    },

    renderList: function(complete) {
        return <List manageClick={this.toggleItem} removeButton={this.removeItem} list={this.state.list.filter(function(x) { return x.isComplete === complete; })} />;
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
