import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import EditProfile from './EditProfile.jsx';
import SavedVideos from './SavedVideos.jsx';
import AvatarSelection from './AvatarSelection.jsx';

class Profile extends Component {
	state = {
		avatar: false,
	}

	componentDidMount() {
		this.props.handleShowDash();
    // this.props.state.user.loggedIn ? null : this.handleUserData();
	}

	// Only call if user is not already logged in
	// handleUserData() {
	// 	let id = this.props.userId.match.params.id;
	// 	axios.get(`/routes/user/${id}`)
	// 		.then((results) => {
	// 			let creds = results.data.users;
	// 			this.props.handleUpdateUser(creds);
	// 		})
	// 		.catch((err) => {
	// 			console.log('There was an error: ', err);
	// 			this.props.history.push('/');
	// 		});
	// }

	showAvatars() {
		!this.state.avatar ? this.setState({ avatar: true }) : this.setState({ avatar: false });
	}
  
  render() {
		console.log('this is from profile: ', this.props);
		const { loggedIn, creds } = this.props.auth;
		const { edit, editButton } = this.props.editUser;

    return (
			<div className="profile-page-wrapper">

				<div className="profile-banner">
					<h1 className="twopercent-spacing">
						{loggedIn ? <img className="profile-avatar-responsive" src={creds.img}/> : null}
						Profile
					</h1> 
				</div>

				<div className="welcome twopercent-spacing">
					<h2>Welcome back,</h2>
				</div>

				<div className="profile-username-edit twopercent-spacing">
					{loggedIn ? <h2>{creds.displayName || creds.username}! {creds.location ? <span className="profile-location"></span> : null}</h2> : null}
					<button className="button profile-button" onClick={this.props.handleEditProfile}>{editButton}</button>
					{edit ? 
					<EditProfile 
						handleEditProfile={this.props.handleEditProfile.bind(this)}
					/> : 
					null}
				</div>

				<div className="avatar-selection twopercent-spacing underline">
					<button className="button profile-button" onClick={() => this.showAvatars()}>Change Avatar</button>
					{this.state.avatar && <AvatarSelection handleUpdateAvatar={this.props.handleUpdateAvatar}/>}
				</div>
				
				<div className="profile-themeselect twopercent-spacing">
					<h4 className="theme-title">Theme:</h4>
					<select className="theme-changer" onChange={(e) => this.props.handleUpdateTheme(e.target.value)}>
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

export default withRouter(connect(mapStateToProps)(Profile));
