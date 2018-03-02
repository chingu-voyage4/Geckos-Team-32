import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routing/AppRoutes.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    );
  }
}

