import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './src/routing/AppRoutes.jsx';
import { store } from './src/helpers/store';
import styles from './src/styles/main.scss';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>, 
  document.getElementById('root')
);

// use in development for hot module reloading
if (module.hot) {
  module.hot.accept();
}
