import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../../shared/Search_bar.jsx';
import VideoList from '../../shared/Video_list.jsx';
import VideoDetail from '../../shared/Video_detail.jsx';
// import API_KEY from '../../helpers/api.jsx';

const API_KEY = "AIzaSyCqCZFFCtUYNsXmm-ew0nFZcArMP1ygpCI";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
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
					<form className="landing-searchbar">
						<span className="landing-search-icon"><i className="fas fa-search"></i></span>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}  />
					</form>
				</div>
			</div>
		);
  }
}