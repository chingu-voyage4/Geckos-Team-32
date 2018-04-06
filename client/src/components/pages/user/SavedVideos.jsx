import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SavedVideos extends React.Component {
  componentDidMount() {
    console.log('mounted: ', this.props);
    this.props.retrieveSavedVideos();
  }

  handleRemoveVideo(video) {
		let id = this.props.userId.match.params.id;
    axios.get(`routes/user/${id}/videos/delete/${video}`)
      .then((results) => {
        let newVideos = results.data.videos;
        this.props.handleUpdateSavedVideos(newVideos);
      })
      .catch((err) => {
        console.log(err);
      });
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
                  <Link 
                    to={{
                      pathname: '/playvideo',
                      state: { video: video }
                    }}>
                    <img src={video.thumbnail} alt="video thumbnail"/>
                    <h4>{video.title}</h4>
                    </Link>
                    <div>
                      <button className="button video-delete" onClick={() => this.handleRemoveVideo(video._id)}>Remove</button>
                    </div>
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
