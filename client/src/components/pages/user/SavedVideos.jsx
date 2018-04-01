import React from 'react';

class SavedVideos extends React.Component {
  render() {
    console.log('from savedvideos.jsx:', this.props.videos);
    return (
      <div>
        <h2>Saved/Liked Videos</h2>
        {this.props.videos.map((video, index) => {
          return (
            <div key={index}>
              <img src={video.thumbnail} alt="video thumbnail"/>
              <h4>{video.title}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SavedVideos;
