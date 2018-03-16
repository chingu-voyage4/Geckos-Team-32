import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top">
        <h2 className="dash-header">Enjoying your experience with G<span className="namered">echo</span>?</h2>
        <p className="sign-up"><NavLink className="dashboard__link" to="/routes/signup">Sign up</NavLink> now and start receiving extra benefits of being a member including:</p>
        <ul className="benefits-list">
          <li>- User avatar</li>
          <li>- Customized themes</li>
          <li>- Save 'liked' videos</li>
          <li>- See what other users are watching</li>
          <p className="bold">And much more!</p>
        </ul>
        
      </div>
    );
  }
}