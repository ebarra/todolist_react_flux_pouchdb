const App = require("./App.jsx");
var React = require('react');
var ReactDOM = require('react-dom');

const db = new PouchDB('shopapp');
const remoteCouch = 'http://localhost:5984/shopapp';


// Initialise a sync with the remote server
function sync() {
  var opts = {live: true};
  db.replicate.to(remoteCouch, opts, syncError);
  db.replicate.from(remoteCouch, opts, syncError);
}

// There was some form or error syncing
function syncError() {
  console.log("SYNCERROR");
}

sync();

ReactDOM.render(<App localDB={db}/>, document.getElementById('milista'));
