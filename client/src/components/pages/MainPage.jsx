import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../shared/Dashboard.jsx';
import Landing from './landing/Landing.jsx';

export default class MainPage extends Component {
  render() {
		return (
      <div className="main-page">
        <Dashboard />
        <Landing />
			</div>
		);
  }
}