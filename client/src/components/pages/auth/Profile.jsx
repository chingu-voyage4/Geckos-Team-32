import React from 'react';
import axios from 'axios';


class Profile extends React.Component {
	componentDidMount() {
    let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				let creds = {
					// add more data here later
					username: results.data.users.username
				}
				this.props.handleUpdateUser(creds);
			})
			.catch((err) => {
				console.log('There was an error: ', err);
			});
	}
  
  render() {
		// console.log('this is from profile: ', this.props);
    return (
			<div className="page-wrapper">
				{this.props.user.loggedIn ? <h1>{this.props.user.creds.username}</h1> : null}
      </div>
    );
  }
}

export default Profile;