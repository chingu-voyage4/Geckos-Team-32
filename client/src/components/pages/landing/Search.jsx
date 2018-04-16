import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlayVideo from './PlayVideo.jsx';

export default class Search extends Component {
  componentDidMount() {
    this.props.handleShowDash();
    this.handleSearchInput();
  }
    
  handleSearchInput(e) {
    let search = null;
    if (e) {
      e.preventDefault();
      search = e.target.elements.search.value
    } else {
      search = this.props.userId.match.params.id;
    }
    this.props.handleSearchInput(search);
    this.props.userId.history.push(`/search/${search}`);
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
    console.log('from search: ', this.props);
    const { videos, selectedVideo } = this.props.stateData;
    
    return (
      <div className="page-wrapper">
        
        <div className="post-landing-searchbar-wrapper">
          <form className="landing-searchbar" onSubmit={this.handleSearchInput.bind(this)}>
            <button type="submit" className="landing-search-icon button"><i className="fas fa-search"></i></button>
            <input className="landing-search" name="search" defaultValue={this.props.userId.match.params.id}/>
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