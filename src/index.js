import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

/**
 * 练习部分
 */
import App from './docs/main-concepts-01/01';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
