import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
		return (
			<div className="landing-page">
				<div className="landing-page-title">
				<h1>Discover new songs and artists based on your interests!</h1>
					<Link to="/PostLanding">Button to next page</Link>
				</div>
				<div className="searchbar-wrapper">
					<h2>Get Started with your favorite song/artist!</h2>
					<form className="landing-searchbar">
						<span className="fas fa-search"></span>
						<input className="landing-search" />
					</form>
				</div>
	
			</div>
		);
  }
}