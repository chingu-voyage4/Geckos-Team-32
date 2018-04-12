import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SavedVideos extends Component {
  componentDidMount() {
    console.log('mounted: ', this.props);
    this.props.retrieveSavedVideos();
  }

  handleRemoveVideo(video) {
    console.log('got clicked');
		let id = this.props.userId.match.params.id;
    axios.delete(`routes/user/${id}/videos/delete/${video}`)
      .then((results) => {
        let newVideos = results.data.videos;
        this.props.handleUpdateSavedVideos(newVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillReceiveProps() {
    console.log('receiving new props', this.props);
  }

  componentDidUpdate() {
    console.log('updated component', this.props);
  }

  render() {
    // console.log('from savedvideos.jsx:', this.props.videos);

    if (this.props.videos) {
      return (
        <div className="page-wrapper saved-video-container">
          <h2>Saved/Liked Videos</h2>
          <div className="saved-video-list">
            {this.props.videos.map((video, index) => {
              return (
                <div key={index} className="saved-video-list-items">
                  <button className="button video-delete" onClick={() => this.handleRemoveVideo(video._id)}><i className="fas fa-times"></i></button>
                  <Link 
                    to={{
                      pathname: '/playvideo',
                      state: { video: video }
                    }}>
                    <img src={video.thumbnail} alt="video thumbnail"/>
                    <h4>{video.title}</h4>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-wrapper saved-video-container">
          <h1>Take another looked at your saved videos here!</h1>
        </div>
      );
    }
  }
}

export default SavedVideos;
