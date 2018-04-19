import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import DashTop from './DashboardComponents/DashTop.jsx';
import DashTopUser from './DashboardComponents/DashTopUser.jsx';
import DashBottom from './DashboardComponents/DashBottom.jsx';

class Dashboard extends Component {
	handleCheckLogin() {
		let session = JSON.parse(sessionStorage.getItem('session')); // get JSON session data
		this.props.auth.loggedIn ? this.props.handleShowDash() : null;
	}

  render() {
		console.log('from dashboard: ', this.props);
		this.handleCheckLogin();
		const { loggedIn, creds } = this.props.auth;

		return (
			<div className={this.props.launch ? "hide-dash" : "dashboard"}>
				{loggedIn ? 
					<DashTopUser 
						retrieveSavedVideos={this.props.retrieveSavedVideos} 
					/> : 
					<DashTop />}
				<DashBottom />
			</div>
		);
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
