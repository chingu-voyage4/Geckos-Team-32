import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
	
  render() {
		return (
			<div>
				<nav className="navBar">
          <nav className="wrapper">
            <div className="logo"><a href=".home">5Gecho</a></div>
            <div className="toggle">
              <input type="checkbox" id="menu-toggle" />
              <label htmlFor="menu-toggle" className="dropdown-toggle"></label>
            </div>
            <ul>
              <li><a href=".sec01">About</a></li>
              <li><a href=".sec03">Pro</a></li>
              <li><a href=".sec03">Help</a></li>
              <li><a href=".sec04">Log In</a></li>
              <li><a className ="btn" href=".sec04">Sign up</a></li>
            </ul>
          </nav>
        </nav>
			</div>
		);
  }
}