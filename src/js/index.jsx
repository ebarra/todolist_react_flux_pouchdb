const App = require("./App.jsx");
var React = require('react');
var ReactDOM = require('react-dom');

const db = new PouchDB('shopapp');
const remoteCouch = false;

ReactDOM.render(<App localDB={db}/>, document.getElementById('milista'));
