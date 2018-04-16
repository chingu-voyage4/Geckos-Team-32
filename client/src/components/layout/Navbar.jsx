import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/dantv5.png";
import brand from "../../assets/Gechotext2.png";

export default class Navbar extends Component {
  state = {
    navOpen: false
  }

  opennavbar = () => {
    !this.state.navOpen ? this.setState({navOpen: true}) : this.setState({navOpen: false})
  };
  render() {
    // console.log('FROM NAVBAR PROPS: ', this.props);
    const id = this.props.user.creds._id ? this.props.user.creds._id : "profile";

		return (
			<div className={this.props.theme}>
				<nav className="navBar">
          <div className="logo">
            <NavLink className="icon" exact to="/">
              <img className="test" src={logo} />
            </NavLink>
            <NavLink className="brand" exact to="/">
              GECHO
            </NavLink>
          </div>
          <div className="hamburger">
            <input id="toggle" 
            className={this.state.navOpen ? "toggle-on" : "toggle-off" }
            onClick={this.opennavbar} 
            type="checkbox" />
            <label className="toggle-container" htmlFor="toggle">
                <span className="button button-toggle"></span>
            </label>
            <div className="burger-links">
              <NavLink to="/about" className="nav-item two bar1">About</NavLink>
              {this.props.user.loggedIn ?
                <div>
                  <NavLink to={`/user/${id}`} className="nav-item two bar2" onClick={this.burgerToggle}>Profile</NavLink>
                  <NavLink to={`/user/${id}/playlists`} className="nav-item two bar3" onClick={this.burgerToggle}>Playlists</NavLink>
                  <NavLink to={`/user/${id}/saved`} className="nav-item two bar4" onClick={this.burgerToggle}>Liked Videos</NavLink>
                  <a href="#" className="nav-item two bar5" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a>
                </div> :
                <div>
                  <NavLink to="/signup" className="nav-item two bar2" onClick={this.burgerToggle}>Sign Up</NavLink>
                  <NavLink to="/login" className="nav-item two bar3" onClick={this.burgerToggle}>Log In</NavLink>
                </div>
              }
            </div>
          </div>

          <div className="nav-wrapper">
            <ul className="nav-list">
              <li><NavLink to="/about" className="nav-item">About</NavLink></li>
            </ul>
            {this.props.user.loggedIn ? 
              <ul className="login-list">
                <li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a></li>
                <li><NavLink to={`/user/${id}`}>Profile</NavLink></li>
              </ul> : 
              <ul className="login-list">
                <li><NavLink to="/signup" className ="btn">Sign Up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
              </ul>
            }
          </div>
        </nav>
			</div>
    );
  }
}