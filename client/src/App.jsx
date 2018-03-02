import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routing/AppRoutes.jsx';

export default class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    );
  }
}

