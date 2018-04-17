import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    // console.log('from user dash: ', this.props);
    const { username, _id, img } = this.props.state.user.creds;

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
            <li><NavLink className="dashboard__link" to={`/user/${_id}/saved`} onClick={this.props.retrieveSavedVideos}>Liked Videos</NavLink></li>
          </ul>
        </div>

        <div className="dash-theme">
          <h4 className="theme-title">Theme:</h4>
          <select className="theme-changer" onChange={(e) => this.props.handleUpdateTheme(e.target.value)}>
            <option value="theme-gecho">Gecho</option>
            <option value="theme-twilight">Twilight</option>
            <option value="theme-peacock">Peacock</option>
            <option value="theme-good-vibes">Good Vibes</option>
          </select>
        </div>
      </div>
    );
  }
}