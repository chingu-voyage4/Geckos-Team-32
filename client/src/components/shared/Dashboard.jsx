import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DashTop from './DashboardComponents/DashTop.jsx';
import DashTopUser from './DashboardComponents/DashTopUser.jsx';
import DashBottom from './DashboardComponents/DashBottom.jsx';

export default class Dashboard extends Component {
  render() {
		console.log('from dashboard: ', this.props);
		const { loggedIn } = this.props.state.user;

		return (
			<div className={this.props.state.launch ? "hide-dash" : "dashboard"}>
				{loggedIn ? 
					<DashTopUser 
						state={this.props.state} 
						retrieveSavedVideos={this.props.retrieveSavedVideos} 
						handleUpdateTheme={this.props.handleUpdateTheme}
					/> : 
					<DashTop />}
				<DashBottom />
			</div>
		);
  }
}