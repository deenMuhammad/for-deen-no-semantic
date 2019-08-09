import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerList from './App';
import * as serviceWorker from './serviceWorker';
import './seed'
ReactDOM.render(<PlayerList />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
