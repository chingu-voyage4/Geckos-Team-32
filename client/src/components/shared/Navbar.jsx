import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/gecho2.png";

export default class Navbar extends Component {
	
  render() {
		return (
			<div>
				<nav className="navBar">
            <div className="logo">
              <NavLink exact to="/">
                <img src={logo} />
              </NavLink>
            </div>
            <div className="hamburger">
              <input type="checkbox" id="menu-toggle" />
              <label htmlFor="menu-toggle" className="dropdown-toggle"></label>
            </div>
            <div className="nav-wrapper">
              <ul className="nav-list">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/pro">Profile</NavLink></li>
              </ul>
              {this.props.user.loggedIn ? 
                <ul className="login-list"><li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign out</a></li></ul> : 
                <ul className="login-list">
                  <li><NavLink to="/signup" className ="btn">Sign up</NavLink></li>
                  <li><NavLink to="/login">Log In</NavLink></li>
                </ul>
              }
            </div>
        </nav>
			</div>
		);
  }
}