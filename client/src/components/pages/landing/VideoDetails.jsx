import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <h2>Choose a video to begin!</h2>;
  }

  const videoId = props.selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const saveVideo = {
    title: props.selectedVideo.snippet.title,
    thumbnail: props.selectedVideo.snippet.thumbnails.default.url,
    url: `https://www.youtube.com/embed/${videoId}`
  }
  console.log(props, videoId, url);

  return (
    <div>
      <div>
        <iframe src={url} className="main-video"></iframe>
      </div>
      <div>
        <div>{props.selectedVideo.snippet.title}</div>
        <div>{props.selectedVideo.snippet.description}</div>
        <button onClick={(e) => props.handleLikedVideo(e, saveVideo)}><i className="fas fa-heart"></i></button>
      </div>
    </div>
  );
};

export default VideoDetail;