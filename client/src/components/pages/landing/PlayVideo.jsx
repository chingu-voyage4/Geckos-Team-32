import React, { Component } from 'react';

const PlayVideo = (props) => {
  console.log('this is playvideo props: ', props);

  if (props.location) {
    const { title, description, url } = props.location.state.video;
    
    return (
      <div className="page-wrapper">
        <iframe src={url} className="main-video"></iframe>
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
          <button onClick={(e) => props.handleLikedVideo(e, props.selectedVideo)}><i className="fas fa-heart"></i></button>
        </div>
      </div>
    );
  } else {
    return <h2>Choose a video to begin!</h2>;
  }

};

export default PlayVideo;


