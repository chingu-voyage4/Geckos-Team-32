import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const VideoDetail = ({selectedVideo}) => {
  if (!selectedVideo){
    return <h2>Choose a video to begin!</h2>;
  }

  const videoId = selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div>
        <iframe src={url} className="main-video"></iframe>
      </div>
      <div>
        <div>{selectedVideo.snippet.title}</div>
        <div>{selectedVideo.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;