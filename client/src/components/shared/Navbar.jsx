import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	
  render() {
		return (
			<div>
				<nav className="navBar">
          <nav className="nav-wrapper">
            <div className="logo"><NavLink exact to="/">5Gecho</NavLink></div>
            <div className="toggle">
              <input type="checkbox" id="menu-toggle" />
              <label htmlFor="menu-toggle" className="dropdown-toggle"></label>
            </div>
            <ul className="nav-list">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/pro">Pro</NavLink></li>
              <li><NavLink to="/help">Help</NavLink></li>
            </ul>
            {this.props.user.loggedIn ? 
              <ul className="nav-list"><li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Log out</a></li></ul> : 
              <ul className="nav-list">
                <li><NavLink to="/login">Log In</NavLink></li>
                <li><NavLink to="/signup" className ="btn">Sign up</NavLink></li>
              </ul>
            }
          </nav>
        </nav>
			</div>
		);
  }
}