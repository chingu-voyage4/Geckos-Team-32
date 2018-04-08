import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayVideo from './PlayVideo.jsx';

export default class PostLandingPage extends Component {
  handleSearchInput(e) {
		e.preventDefault();
		const search = e.target.elements.search.value;
    this.props.handleSearchInput(search);
  }

  saveSelectedVideo(video) {
    console.log('this is the youtube video details: ', video);
    const selectedVideo = {
      title: video.snippet.title,
      description: video.snippet.description,
      url: video.id.videoId,
      thumbnail: video.snippet.thumbnails.high.url
    }

    this.props.handleSelectedVideo(selectedVideo);
  }

  render() {
    console.log('from postlanding: ', this.props);
    const { search, videos, selectedVideo } = this.props.stateData;
    
    return (
      <div className="page-wrapper">
        
        <div className="post-landing-searchbar-wrapper">
          <form className="landing-searchbar" onSubmit={this.handleSearchInput.bind(this)}>
            <button type="submit" className="landing-search-icon button"><i className="fas fa-search"></i></button>
            <input className="landing-search" name="search" defaultValue={search}/>
          </form>
        </div>

        <PlayVideo 
          selectedVideo={selectedVideo}
          handleLikedVideo={this.props.handleLikedVideo}
          user={this.props.stateData.user}
        />

        <div className="post-landing-video-pull">
          {videos.map((video, index) => (
            <div key={index} className="individual-video-space" onClick={() => this.saveSelectedVideo(video)}>
              <img className="post-search-video" src={video.snippet.thumbnails.high.url}/>
              <h3>{video.snippet.title}</h3>
            </div> 
          ))}  
        </div>
      </div>
    );
  }
}