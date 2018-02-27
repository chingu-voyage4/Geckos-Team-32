import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Landing extends Component {
  render() {
		return (
			<div className="landing-page">
				<div className="landing-page-title">
				<h1>Discover new songs and artists based on your interests!</h1>
				</div>
				<div className="searchbar-wrapper">
					<h2>Get Started with your favorite song/artist!</h2>
					<form className="landing-searchbar">
						<input className="landing-search"></input>
					</form>
				</div>
	
			</div>
		);
  }
}