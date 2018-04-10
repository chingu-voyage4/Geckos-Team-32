import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
	handleSearchInput(e) {
		e.preventDefault();
		const search = e.target.elements.search.value;
		this.props.handleSearchInput(search);
		this.props.history.push('/search');
	}

  render() {
		// console.log('from home', this.props);
		return (
			<div className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}>
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

export default withRouter(Home);