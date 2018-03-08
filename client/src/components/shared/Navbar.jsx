import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/dantv5.png";
import brand from "../../assets/Gechotext2.png";

export default class Navbar extends Component {
	
  constructor(props) {
    super(props);
  }

  render() {
		return (
			<div>
				<nav className="navBar">
            <div className="logo">
            <NavLink className="icon" exact to="/">
                <img src={logo} />
              </NavLink>
              <NavLink className="brand" exact to="/">
                <img src={brand} />
              </NavLink>
            </div>

            <div className="hamburger">

            <a ref="btn" href="#" className="btn-menu show-on-small"
              onClick={this.showNav}><i></i></a>
            <Sidenav ref="sideNav" />
              <div className="hamburger-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>

            
            <div className="nav-wrapper">
              <ul className="nav-list">
                <li><NavLink to="/about">About</NavLink></li>
              </ul>
              {this.props.user.loggedIn ? 
                <ul className="login-list">
                  <li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign  out</a></li>
                  <li><NavLink to="/pro">Profile</NavLink></li>
                </ul> : 
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
  showNav() {
    this.refs.sideNav.show();
  }
}