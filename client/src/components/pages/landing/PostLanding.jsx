import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PostLandingPage extends Component {
  render() {
    return (
      <div className="page-wrapper">
        
        <div className="post-landing-searchbar-wrapper">
          <form className="landing-searchbar">
            <span className="landing-search-icon"><i className="fas fa-search"></i></span>
            <input className="landing-search" />
          </form>
          <h2>Choose a video to begin!</h2>
        </div>

        <div className="post-landing-video-pull">
          
          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

          <div className="individual-video-space">
            <img className="post-search-video" src="https://images.unsplash.com/photo-1506367289495-02a78c329501?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b32100a8e6e1ebe0df8f0f9ddb50a94e&auto=format&fit=crop&w=1955&q=80" />
            <h3>Video Title</h3>
            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ante eros, eu gravida leo viverra quis.</p>
          </div>

        </div>
      </div>
    );
  }
}