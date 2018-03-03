import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostLandingPage extends Component {
  handleSearchInput(e) {
		e.preventDefault();
		const search = e.target.elements.search.value;
		this.props.handleSearchInput(search);
  }
  
  render() {
    // console.log('from postlanding: ', this.props.stateData.videos);
    
    return (
      <div className="page-wrapper">
        
        <div className="post-landing-searchbar-wrapper">
          <form className="landing-searchbar" onSubmit={this.handleSearchInput.bind(this)}>
            <span className="landing-search-icon"><i className="fas fa-search"></i></span>
            <input className="landing-search" name="search"/>
          </form>
          <h2>Choose a video to begin!</h2>
        </div>

        <div className="post-landing-video-pull">
          {this.props.stateData.videos.map((video, index) => (
            <div key={index} className="individual-video-space">
              <img className="post-search-video" src={video.snippet.thumbnails.high.url}/>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </div>
          ))}
        </div>

      </div>
    );
  }
}