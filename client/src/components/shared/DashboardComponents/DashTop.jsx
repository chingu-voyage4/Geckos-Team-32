import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashTop extends Component {
  render() {
    return (
      <div className="dashboard-top">
        <h2>Enjoying your experience with 5Gecho?</h2>
        <p><NavLink className="dashboard__link" to="/signup">Sign up</NavLink> now and start receiving extra benefits of being a member including:</p>
        <ul className="benefits-list">
          <li>Customized themes</li>
          <li>Save 'liked' videos</li>
          <li>See what other users are watching</li>
        </ul>
        <p>And much more!</p>
      </div>
    );
  }
}