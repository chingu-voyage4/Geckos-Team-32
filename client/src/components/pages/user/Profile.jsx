import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile.jsx';
import SavedVideos from './SavedVideos.jsx';
import AvatarSelection from './AvatarSelection.jsx';

class Profile extends React.Component {
	state = {
		avatar: false,
	}

	componentDidMount() {
		this.props.handleShowDash();
    this.props.state.user.loggedIn ? null : this.handleUserData();
	}

	// Only call if user is not already logged in
	handleUserData() {
		let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				let creds = results.data.users;
				this.props.handleUpdateUser(creds);
			})
			.catch((err) => {
				console.log('There was an error: ', err);
			});
	}

	showAvatars() {
		!this.state.avatar ? this.setState({ avatar: true }) : this.setState({ avatar: false });
	}
  
  render() {
		// console.log('this is from profile: ', this.props);
		const { loggedIn, creds } = this.props.state.user;
		const { edit, editButton } = this.props.state.editUser;

    return (
			<div className="profile-page-wrapper">

				<div className="profile-banner">
					<h1 className="twopercent-spacing">Profile</h1> 
				</div>

				<div className="welcome twopercent-spacing">
					<h2>Welcome back</h2>
				</div>

				<div className="profile-username-edit twopercent-spacing">
					{loggedIn ? <h2>{creds.username}!</h2> : null}
					<button className="button profile-button" onClick={this.props.handleEditProfile}>{editButton}</button>
					{edit ? 
					<EditProfile 
						props={this.props} 
						creds={creds} 
						id={this.props.userId.match.params.id} 
						handleEditProfile={this.props.handleEditProfile.bind(this)}
					/> : 
					null}
				</div>
					
				<div className="savedvideos twopercent-spacing">
					<Link to={`/user/${creds._id}/saved`}>
						<button className="button profile-button">Liked/Saved Videos</button>
					</Link>
				</div>

				<div className="playlists twopercent-spacing">
					<Link to={`/user/${creds._id}/playlists`}>
						<button className="button profile-button"> Playlists </button>
					</Link>
				</div>

				<div className="avatar-selection twopercent-spacing underline">
					<button className="button profile-button" onClick={() => this.showAvatars()}>Change Avatar</button>
					{this.state.avatar && <AvatarSelection handleUpdateAvatar={this.props.handleUpdateAvatar}/>}
				</div>
	
      </div>
    );
	}
}

export default Profile;