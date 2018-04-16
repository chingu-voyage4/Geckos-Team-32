import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/dantv5.png";
import brand from "../../assets/Gechotext2.png";

export default class Navbar extends Component {
  state = {
    navOpen: false,
    linkClicked: false
  }

  opennavbar = () => {
    !this.state.navOpen ? this.setState({navOpen: true}) : this.setState({navOpen: false})
  };

  resetMobileNavbar = () => {
    if (navOpen) {
      if (!this.state.linkClicked) {
        this.setState.linkClicked = true;
      }
      else {
        return
      }
    }
    // !this.state.linkClicked ? this.setState({linkClicked: true}) : null
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
            className={this.state.navOpen ? "toggle-on" : (this.state.linkClicked ? "toggle-off" : "toggle-off") }
            onClick={this.opennavbar} 
            type="checkbox" />
            <label className="toggle-container" htmlFor="toggle">
                <span className="button button-toggle"></span>
            </label>
            <div className="burger-links">
              <NavLink to="/about" className="nav-item two bar1" linkClicked={this.state.linkClicked} onClick={this.resetMobileNav}>About</NavLink>
              {this.props.user.loggedIn ?
                <div>
                  <NavLink to={`/user/${id}`} className="nav-item two bar2" onClick={this.resetMobileNav}>Profile</NavLink>
                  <NavLink to={`/user/${id}/playlists`} className="nav-item two bar3" onClick={this.resetMobileNav}>Playlists</NavLink>
                  <NavLink to={`/user/${id}/saved`} className="nav-item two bar4" onClick={this.resetMobileNav}>Liked Videos</NavLink>
                  <a href="#" className="nav-item two bar5" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a>
                </div> :
                <div>
                  <NavLink to="/signup" className="nav-item two bar2" onClick={this.resetMobileNav}>Sign Up</NavLink>
                  <NavLink to="/login" className="nav-item two bar3" onClick={this.resetMobileNav}>Log In</NavLink>
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
                <li><a href="#" className="nav-item item-one" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a></li>
                <li><NavLink to={`/user/${id}`} className="nav-item item-two">Profile</NavLink></li>
              </ul> : 
              <ul className="login-list">
                <li><NavLink to="/signup" className="nav-item item-one btn">Sign Up</NavLink></li>
                <li><NavLink to="/login" className="nav-item item-two">Log In</NavLink></li>
              </ul>
            }
          </div>
        </nav>
			</div>
    );
  }
}