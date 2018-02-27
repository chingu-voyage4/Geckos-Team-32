import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes.jsx';

export default class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

