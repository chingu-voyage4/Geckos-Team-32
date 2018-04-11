import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top">
        <h2 className="dash-header">Enjoying your experience?</h2>
        <p className="sign-up"><NavLink className="dashboard__link" to="/signup">Sign up</NavLink> now and start receiving extra benefits of being a member including:</p>
        <ul className="benefits-list">
          <li>- User avatar</li>
          <li>- Customized themes</li>
          <li>- Save 'liked' videos</li>
          <p className="bold">And much more!</p>
        </ul>
        
      </div>
    );
  }
}