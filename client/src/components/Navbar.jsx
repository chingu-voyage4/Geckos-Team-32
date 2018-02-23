import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
	
  render() {
		return (
			<div>

				<nav class="navBar">
          <nav class="wrapper">
            <div class="logo"><a href=".home">5Gecho</a></div>
            <div class="toggle">
              <input type="checkbox" id="menu-toggle" />
              <label for="menu-toggle" class="dropdown-toggle"></label>
            </div>
            <ul>
              <li><a href=".sec01">About</a></li>
              <li><a href=".sec03">Pro</a></li>
              <li><a href=".sec03">Help</a></li>
              <li><a href=".sec04">Log In</a></li>
              <li><a class ="btn" href=".sec04">Sign up</a></li>
            </ul>
          </nav>
        </nav>
        
			</div>
		);
  }
}
