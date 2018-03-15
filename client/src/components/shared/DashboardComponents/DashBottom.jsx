import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DashBottom extends Component {
  render() {
    return (
      <div className="dashboard-bottom">
        <div className="dashboard-social-media">
          <a className="social-media" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="social-media" href="#"><i className="fab fa-instagram"></i></a>
          <a className="social-media" href="#"><i className="fab fa-twitter"></i></a>
          <a className="social-media" href="#"><i className="fab fa-github"></i></a>
        </div>
        <div className="dashboard-footer">
          <p>API provided by: <a className="dashboard__link" href="https://developers.google.com/youtube/">YouTube <i className="fab fa-youtube"></i></a></p>
          <p className="geckos-credit">Copyright &copy; 2018 <a className="dashboard__link" href="https://github.com/chingu-voyage4/Geckos-Team-32">Geckos-32</a></p>
        </div>
      </div>
    );
  }
}

