import React from 'react';
import { Link } from 'react-router-dom';

class SavedVideos extends React.Component {
  componentDidMount() {
    console.log('mounted: ', this.props);
    this.props.retrieveSavedVideos();
  }

  render() {
    console.log('from savedvideos.jsx:', this.props.videos);

    if (this.props.videos) {
      return (
        <div className="page-wrapper saved-video-container">
          <h2>Saved/Liked Videos</h2>
          <div className="saved-video-list">
            {this.props.videos.map((video, index) => {
              return (
                <div key={index} className="saved-video-list-items">
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
