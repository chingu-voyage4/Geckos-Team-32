import React from 'react';
import ReactDOM from 'react-dom';
import styles from './src/styles/main.scss';
import App from './src/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();