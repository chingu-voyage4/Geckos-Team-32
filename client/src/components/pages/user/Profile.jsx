import React from 'react';
import axios from 'axios';
import EditProfile from './EditProfile.jsx';

class Profile extends React.Component {
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
  
  render() {
		// console.log('this is from profile: ', this.props);
		const { loggedIn, creds } = this.props.state.user;
		const { edit, editButton } = this.props.state.editUser;

    return (
			<div className="profile-page-wrapper">
				
				<div className="profile-username-edit">
				{loggedIn ? <h1>{creds.username}</h1> : null}
				<button className="button" onClick={this.props.handleEditProfile}>{editButton}</button>
				{edit ? 
				<EditProfile 
					props={this.props} 
					creds={creds} 
					id={this.props.userId.match.params.id} 
					handleEditProfile={this.props.handleEditProfile.bind(this)}
				/> : 
				null}
				</div>

				<div>
					
				</div>

      </div>
    );
  }
}

export default Profile;