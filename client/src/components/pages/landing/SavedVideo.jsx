import React, { Component } from 'react';

const SavedVideo = (props) => {
  const { video } = props.location.state;
  console.log('this the video: ', video);

  return (
    <div className="page-wrapper">
      <h1>Saved Video:</h1>
      <iframe src={video.url} className="main-video"></iframe>
      <h3>{video.title}</h3>
    </div>
  );
};

export default SavedVideo;


