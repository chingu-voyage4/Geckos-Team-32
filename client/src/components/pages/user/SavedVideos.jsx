import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchLikedVideo, deleteLikedVideo } from '../../../actions/userVideos';

class SavedVideos extends Component {
  componentDidMount() {
    this.props.auth.loggedIn ? this.props.dispatch(fetchLikedVideo(this.props.auth.creds._id)) : this.props.userId.history.push('/');
  }

  componentDidUpdate() {
    if (!this.props.auth.loggedIn) { // re-direct to homepage if not logged in
      this.props.userId.history.push('/'); 
    }
  }

  render() {
    // console.log('from savedvideos.jsx:', this.props);

    if (this.props.likedVideos && this.props.likedVideos.length > 0) {
      return (
        <div className="page-wrapper saved-video-container">
          <h2>Re-watch your liked videos</h2>
          <div className="saved-video-list">
            {this.props.likedVideos.map((video, index) => {
              return (
                <div key={index} className="saved-video-list-items">
                  <button className="button video-delete" onClick={() => this.props.dispatch(deleteLikedVideo(this.props.auth.creds._id, video._id))}><i className="fas fa-times"></i></button>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    likedVideos: state.likedVideos.likedVideos
  };
};

export default connect(mapStateToProps)(SavedVideos);