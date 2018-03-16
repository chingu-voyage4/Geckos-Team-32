import React from 'react';
import axios from 'axios';
import EditProfile from './EditProfile.jsx';

class Profile extends React.Component {
	state = {
		edit: false
	}

	componentDidMount() {
    this.props.user.loggedIn ? null : this.handleUserData();
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

	handleEditProfile = () => {
		!this.state.edit ? this.setState({ edit: true }) : this.setState({ edit: false });
	}
  
  render() {
		console.log('this is from profile: ', this.props);
    return (
			<div className="page-wrapper">
				{this.props.user.loggedIn ? <h1>{this.props.user.creds.username}</h1> : null}
				<button className="button" onClick={this.handleEditProfile}>Edit</button>
				{this.state.edit ? <EditProfile props={this.props}/> : null}
      </div>
    );
  }
}

export default Profile;