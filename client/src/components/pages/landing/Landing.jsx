import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from '../../shared/Search_bar.jsx';
// import VideoList from '../../shared/Video_list.jsx';
// import VideoDetail from '../../shared/Video_detail.jsx';
// import API_KEY from '../../helpers/api.jsx';

const API_KEY = "";

export default class Landing extends Component {
	handleSearchInput(e) {
		e.preventDefault();
		const search = e.target.elements.search.value;
		this.props.handleSearchInput(search);
	}

  render() {
		return (
			<div className="page-wrapper">
				<div className="landing-page-title">
				<h1>Discover new songs and artists based on your interests!</h1>
				<Link to="/PostLanding">Button to next page</Link>
				</div>
				<div className="searchbar-wrapper">
					<h2>Get Started with your favorite song/artist!</h2>
					<form className="landing-searchbar" onSubmit={this.handleSearchInput.bind(this)}>
						<span className="landing-search-icon"><i className="fas fa-search"></i></span>
						<input className="landing-search" name="search"/>
					</form>
				</div>
			</div>
		);
  }
}