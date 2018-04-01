import React from 'react';
import { Link } from 'react-router-dom';

class SavedVideos extends React.Component {
  render() {
    // console.log('from savedvideos.jsx:', this.props.videos);
    return (
      <div>
        <h2>Saved/Liked Videos</h2>
        {this.props.videos.map((video, index) => {
          return (
            <div key={index}>
              <Link 
                to={{
                  pathname: '/savedvideo',
                  state: { video: video }
                }}>
                <img src={video.thumbnail} alt="video thumbnail"/>
              </Link>
              <h4>{video.title}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SavedVideos;
