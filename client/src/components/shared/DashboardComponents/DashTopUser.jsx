import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top dashboard-user">
        <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/profile-icon.png"/>
        <h2>{this.props.user.user.creds.username}</h2>
        <ul>
          <li><a className="dashboard__link" href="#">Playlists</a></li>
          <li><a className="dashboard__link" href="#">Liked Videos</a></li>
          <li className="dashboard-share">Share 
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </li>
        </ul>
        <div className="dash-theme">
          <h3>Theme:</h3>
          <select>
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