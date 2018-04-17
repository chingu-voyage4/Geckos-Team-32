import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { editUser } from '../../../actions/authenticate';

class DashTop extends Component {
  handleUpdateTheme(theme) {
    let req = {
      ...this.props.auth.creds,
      theme: theme
    }
    axios.post(`/routes/user/${this.props.auth.creds._id}/edit`, req)
    .then((results) => {
      this.props.dispatch(editUser(results.data.response));
    });
  }
  
  render() {
    const { _id, img, username, } = this.props.auth.creds;

    return (
      <div className="dashboard-user">
        <NavLink to={`/user/${_id}`}>
          <img className="avatar" src={img}/>
          <h2 className="user-name">{username}</h2>
        </NavLink>

        <div className="user-links">
          <ul>
            <li><NavLink className="dashboard__link" to={`/user/${_id}/playlists`}>Playlists</NavLink></li>
            <li><NavLink className="dashboard__link" to={`/user/${_id}/saved`}>Liked Videos</NavLink></li>
          </ul>
        </div>

        <div className="dash-theme">
          <h4 className="theme-title">Theme:</h4>
          <select className="theme-changer" onChange={(e) => this.handleUpdateTheme(e.target.value)}>
            <option value="theme-gecho">Gecho</option>
            <option value="theme-twilight">Twilight</option>
            <option value="theme-peacock">Peacock</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(DashTop);