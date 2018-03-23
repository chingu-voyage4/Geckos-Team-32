import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './src/App.jsx';
import Reducers from './src/reducers';
import styles from './src/styles/main.scss';

const middleware = [thunkMiddleware]; // {thunkMiddleware} writes action creators that return a function instead of an action
const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(createStore); // {compose} enhances store with middleware
const store = createStoreWithMiddleware(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

module.hot.accept();