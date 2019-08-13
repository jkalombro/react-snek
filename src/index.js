import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//get screensize to determine grid
const { innerHeight, innerWidth } = window;
const size = innerHeight < innerWidth ? innerHeight * 0.8 : innerWidth;
const screen = innerHeight < innerWidth ? "web" : "mobile";

ReactDOM.render(<App size={size} screenmode={screen} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
