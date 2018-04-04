import React from 'react';
import axios from 'axios';
import EditProfile from './EditProfile.jsx';
import SavedVideos from './SavedVideos.jsx';
import AvatarSelection from './AvatarSelection.jsx';

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			saved: false,
			savedVideos: null
		}
	}

	componentDidMount() {
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

	retrieveSavedVideos() {
		console.log('retrieve button clicked');
		let id = this.props.userId.match.params.id;
		let videos = {};
		if (!this.state.saved) {
			axios.get(`/routes/user/${id}/videos`)
				.then((results) => {
					videos = results.data.videos;
					console.log('new video data: ', videos);
					this.setState({ saved: true, savedVideos: videos });
				})
				.catch((err) => {
					console.log('There was an error: ', err);
				});
		} else {
			this.setState({ saved: false });
		}
	}
  
  render() {
		// console.log('this is from profile: ', this.props);
		const { loggedIn, creds } = this.props.state.user;
		const { edit, editButton } = this.props.state.editUser;
		console.log('newest state: ', this.state);

    return (
			<div className="profile-page-wrapper">

				<div className="profile-banner">
					<h1 className="twopercent-spacing">Profile</h1> 
				</div>
				<hr />
				<div className="welcome twopercent-spacing">
					<h2>Welcome back</h2>
					
				</div>
				<div className="profile-username-edit twopercent-spacing">
					
					{loggedIn ? <h2>{creds.username}!</h2> : null}
					<button className="button" onClick={this.props.handleEditProfile}>{editButton}</button>
					{edit ? 
					<EditProfile 
						props={this.props} 
						creds={creds} 
						id={this.props.userId.match.params.id} 
						handleEditProfile={this.props.handleEditProfile.bind(this)}
					/> : 
					null}
					<button className="button" onClick={() => this.retrieveSavedVideos()}>Liked/Saved Videos</button>
					{this.state.saved && <SavedVideos videos={this.state.savedVideos}/>}
				</div>

				<div className="avatar-selection twopercent-spacing underline">
					<AvatarSelection />
				</div>
      </div>
    );
	}
}

export default Profile;