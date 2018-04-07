import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/dantv5.png";
import brand from "../../assets/Gechotext2.png";

export default class Navbar extends Component {
  state = {
    hamburgerToggle: false
  }

  handleOpenNav = () => this.state.hamburgerToggle
    ? this.setState({ hamburgerToggle: true })
    : this.setState({ hamburgerToggle: false });
  
  render() {
    // console.log('FROM NAVBAR PROPS: ', this.props);
    const id = this.props.user.creds._id ? this.props.user.creds._id : "profile";

		return (
			<div>
        <nav className="navBar">
        
          <div className="logo">
{/*         <NavLink className="icon" exact to="/">
              <img src={logo} />
            </NavLink>
            <NavLink className="brand" exact to="/">
              <img src={brand} />
            </NavLink>*/}
          </div>

          <div className="hamburger">
{/*         <div className="hamburger-icon" onClick={this.burgerToggle}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="burger-links">
              <NavLink to="/about" onClick={this.burgerToggle}>About</NavLink>
              {this.props.user.loggedIn ?
                <div>
                  <NavLink to={`/user/${id}`} onClick={this.burgerToggle}>Profile</NavLink>
                  <a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign out</a>
                </div> :
                <div>
                  <NavLink to="/signup" onClick={this.burgerToggle}>Sign up</NavLink>
                  <NavLink to="/login" onClick={this.burgerToggle}>Log In</NavLink>
                </div>
              }
            </div>*/}
            <input id="toggle"  type="checkbox" />
            <label class="toggle-container " for="toggle">
                <span class="button button-toggle"></span>
            </label>
            <nav class="burger-links" hamburgerToggle={this.state.hamburgerToggle} handleShowNav={this.handleShowNav}>
              <a href="" class="nav-item two" href="">About</a>
              <a href="" class="nav-item two" href="">Sign Up</a>
              <a href="" class="nav-item two" href="">Login In</a>
            </nav>
          </div>

          <div className="nav-wrapper">
{/*         <ul className="nav-list">
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            {this.props.user.loggedIn ? 
              <ul className="login-list">
                <li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign out</a></li>
                <li><NavLink to={`/user/${id}`}>Profile</NavLink></li>
              </ul> : 
              <ul className="login-list">
                <li><NavLink to="/signup" className ="btn">Sign up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
              </ul>
            }*/}
            <span class="nav-list">
              <a class="nav-item" href="">About</a>
            </span>
            <span class="login-list">
            <a class="nav-item item-one" href="">Sign Up</a>
            <a class="nav-item item-two" href="">Login In</a>
            </span>
          </div>
        </nav>
			</div>
    );
    
  }
  
  // burgerToggle = function () {
  //   let linksEl = document.querySelector('.burger-links');
  //   if (linksEl.style.display === 'block') {
  //     linksEl.style.display = 'none';
  //   } else {
  //     linksEl.style.display = 'block';
  //   }
    
  // }
}