import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class Landing extends Component {
	handleSearchInput(e) {
		e.preventDefault();
		const search = e.target.elements.search.value;
		this.props.handleSearchInput(search);
		this.props.history.push('/PostLanding');
	}

  render() {
		return (
			<div className="page-wrapper">
				<div className="landing-page-title">
				<h1>Discover new songs and artists based on your interests!</h1>
				</div>
				<div className="searchbar-wrapper">
					<h2>Get Started with your favorite song/artist!</h2>
					<form className="landing-searchbar" onSubmit={this.handleSearchInput.bind(this)}>
						<button type="submit" className="landing-search-icon"><i className="fas fa-search"></i></button>
						<input className="landing-search" name="search"/>
					</form>
				</div>
			</div>
		);
  }
}

export default withRouter(Landing);