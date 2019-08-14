import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Assign1App from './Assign1/Assign1App';
import Assign2App from './Assign2/Assign2App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Assign2App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
