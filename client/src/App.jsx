import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import Dashboard from './components/shared/Dashboard.jsx';
import MainPage from './components/pages/MainPage.jsx';

export default class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Navbar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

