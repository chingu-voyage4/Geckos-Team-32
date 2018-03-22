import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-user">
        <img className="avatar" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
        <h2 className="user-name">{this.props.user.user.creds.username}</h2>
        
        <div className="user-links">
          <ul>
          <li><a className="dashboard__link" href="#">Playlists</a></li>
          <li><a className="dashboard__link" href="#">Liked Videos</a></li>
          </ul>
        </div>

        <div className="dashboard-share">
          <h4 className="share-title">Share:</h4>
          <div className="soc-share">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        
        <div className="dash-theme">
          <h4 className="theme-title">Theme:</h4>
          <select className="theme-changer">
            <option value="Jungle">Jungle</option>
            <option value="Arctic">Arctic</option>
            <option value="City">City</option>
            <option value="Technicolor">Technicolor</option>
          </select>
        </div>
      </div>
    );
  }
}