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
			<div>
        <nav className="navBar">
          <div className="logo">
            <NavLink className="icon" exact to="/">
              <img className="test" src={logo} />
            </NavLink>
            <NavLink className="brand" exact to="/">
              <img src={brand} />
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
              <NavLink to="/about" className="nav-item two">About</NavLink>
              {this.props.user.loggedIn ?
                <div>
                  <NavLink to={`/user/${id}`} href="" className="nav-item two" href="">Profile</NavLink>
                  <a href="" onClick={(e) => this.props.handleLogoutUser(e)} className="nav-item two bar-three" href="">Sign Out</a>
                </div> :
                <div>
                  <NavLink to="/signup" className="nav-item two">Sign up</NavLink>
                  <NavLink to="/login" className="nav-item two bar-three">Log In</NavLink>
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
                <li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)} className="nav-item item-one">Sign Out</a></li>
                <li><NavLink to={`/user/${id}`} className="nav-item item-two" href="">Profile</NavLink></li>
              </ul> :
              <ul className="login-list">
                <li><NavLink to="/signup" className ="nav-item item-one btn">Sign up</NavLink></li>
                <li><NavLink to="/login" className="nav-item item-two">Log In</NavLink></li>
              </ul>
            }
          </div>
        </nav>
			</div>
    );
  }
}