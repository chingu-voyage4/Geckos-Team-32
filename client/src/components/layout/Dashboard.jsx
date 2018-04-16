import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import DashTop from './DashboardComponents/DashTop.jsx';
import DashTopUser from './DashboardComponents/DashTopUser.jsx';
import DashBottom from './DashboardComponents/DashBottom.jsx';

class Dashboard extends Component {
	handleCheckLogin() {
		let session = JSON.parse(sessionStorage.getItem('session')); // get JSON session data
		console.log('the sess: ', session);
		console.log('the props: ', this.props);
		// if (this.props.auth.loggedIn !== session.loggedIn) {
    //   sessionStorage.setItem('session', JSON.stringify(this.state.user)); // set sessionStorage for log in
		// }
	}

	  // handleCheckSession = (session) => {
  //   if (session && this.state.user.loggedIn !== session.loggedIn) {
  //     this.setState({ user: session, launch: false });
  //   }
  // }

  render() {
		console.log('from dashboard: ', this.props);
		this.handleCheckLogin();
		const { loggedIn, creds } = this.props.auth;

		return (
			<div className={this.props.launch ? "hide-dash" : "dashboard"}>
				{loggedIn ? 
					<DashTopUser 
						retrieveSavedVideos={this.props.retrieveSavedVideos} 
						handleUpdateTheme={this.props.handleUpdateTheme}
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
