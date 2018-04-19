import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLikedVideo } from '../../../actions/userVideos';

const PlayVideo = (props) => {
  // console.log('this is playvideo props: ', props);
  window.scrollTo(0, 0)

  if (props.location) {
    const { title, description, url } = props.location.state.video;
    
    return (
      <div className="page-wrapper">
        <iframe src={`https://www.youtube.com/embed/${url}`} className="main-video"></iframe>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  } else if (props.selectedVideo) {
    const { title, description, thumbnail, url } = props.selectedVideo;
    const yturl = `https://www.youtube.com/embed/${url}`;

    return (
      <div>
        <div>
          <iframe src={yturl} className="main-video"></iframe>
        </div>
        <div>
          <div>{title}</div>
          <div>{description}</div>
          {props.auth.loggedIn && 
            <div>
              <button className="save-video-button" onClick={() => props.dispatch(addLikedVideo(props.auth.creds._id, props.selectedVideo))}><i className="fas fa-heart"></i></button>
              <button className="save-video-button"><i className="fas fa-list"></i> <i className="fas fa-plus"></i></button>
            </div>
          }
        </div>
      </div>
    );
  } else { 
    return null;
  }

};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PlayVideo);


