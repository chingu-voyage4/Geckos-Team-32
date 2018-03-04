import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

// Will include conditional rendering to show appropriate content if user if logged in/out
export default class Navbar extends Component {
	
  render() {
		return (
			<div className="dashboard">
				<div className="dashboard-top">
					<h2>Enjoying your experience with 5Gecho?</h2>
					<p><NavLink className="dashboard__link" to="/signup">Sign up</NavLink> now and start receiving extra benefits of being a member including:</p>
					<ul className="benefits-list">
						<li>Customized themes</li>
						<li>Save 'liked' videos</li>
						<li>See what other users are watching</li>
					</ul>
					<p>And much more!</p>
				</div>
				<div className="dashboard-bottom">
					<ul className="dashboard-social-media">
						<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
						<li><a href="#"><i className="fab fa-instagram"></i></a></li>
						<li><a href="#"><i className="fab fa-twitter"></i></a></li>
						<li><a href="#"><i className="fab fa-github"></i></a></li>
					</ul>
					<p>API provided by: <a className="dashboard__link" href="https://developers.google.com/youtube/">YouTube <i className="fab fa-youtube"></i></a></p>
					<p className="geckos-credit">Copyright &copy; 2018 <a className="dashboard__link" href="https://github.com/chingu-voyage4/Geckos-Team-32">Geckos-32</a></p>
				</div>
			</div>
			// <div>
			// 	This is the side profile component for users!
			// </div>
		);
  }
}