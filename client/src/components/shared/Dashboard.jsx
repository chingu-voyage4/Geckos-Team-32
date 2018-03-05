import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DashTop from './DashboardComponents/DashTop.jsx';
import DashTopUser from './DashboardComponents/DashTopUser.jsx';
import DashBottom from './DashboardComponents/DashBottom.jsx';

// Will include conditional rendering to show appropriate content if user if logged in/out
export default class Dashboard extends Component {
	componentDidMount() {
    console.log('didmount from dashboard');
		console.log('dashboard props: ', this.props);
	}

	componentDidUpdate() {
		console.log('dashboard updated: ', this.props);
	}

  render() {
		console.log('dashboard reached');
		return (
			<div className="dashboard">
				{this.props.user.loggedIn ? <DashTopUser user={this.props}/> : <DashTop />}
				<DashBottom />
			</div>
		);
  }
}