import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default class App extends Component {
  state = {}
	
  render() {
		return (
      <div>
        <Navbar />
        This is from App.jsx!!!!!!!!
        <Footer />
			</div>
		);
  }
}

