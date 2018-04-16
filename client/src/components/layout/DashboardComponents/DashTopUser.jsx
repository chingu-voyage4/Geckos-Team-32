import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const DashTop = (props) => {
  const { _id, img, username, } = props.auth.creds;

  return (
    <div className="dashboard-user">
      <NavLink to={`/user/${_id}`}>
        <img className="avatar" src={img}/>
        <h2 className="user-name">{username}</h2>
      </NavLink>

      <div className="user-links">
        <ul>
          <li><NavLink className="dashboard__link" to={`/user/${_id}/playlists/add/jhgjhg`}>Playlists Test</NavLink></li>
          <li><NavLink className="dashboard__link" to={`/user/${_id}/playlists`}>Playlists</NavLink></li>
          <li><NavLink className="dashboard__link" to={`/user/${_id}/saved`} onClick={props.retrieveSavedVideos}>Liked Videos</NavLink></li>
        </ul>
      </div>

      <div className="dash-theme">
        <h4 className="theme-title">Theme:</h4>
        <select className="theme-changer" onChange={(e) => props.handleUpdateTheme(e.target.value)}>
          <option value="theme-gecho">Gecho</option>
          <option value="theme-twilight">Twilight</option>
          <option value="theme-peacock">Peacock</option>
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(DashTop);