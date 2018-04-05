import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    // console.log('from user dash: ', this.props);
    const { username, _id, img } = this.props.state.user.creds;

    return (
      <div className="dashboard-user">
        <img className="avatar" src={img}/>
        <h2 className="user-name">{username}</h2>
        
        <div className="user-links">
          <ul>
            <li><NavLink className="dashboard__link" to={`/user/${_id}/playlist`}>Playlists</NavLink></li>
            <li><NavLink className="dashboard__link" to={`/user/${_id}/saved`}>Liked Videos</NavLink></li>
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