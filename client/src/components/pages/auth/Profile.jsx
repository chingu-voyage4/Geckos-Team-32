import React from 'react';
import axios from 'axios';


class Profile extends React.Component {
	componentDidMount() {
    let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				let creds = {
					username: results.data.users.username
				}
				this.props.handleUpdateUser(creds);
			})
			.catch((err) => {
				console.log('There was an error: ', err);
			});
	}
  
  render() {
    return (
      <div className="page-wrapper">
				<h1>This is the profile page!</h1>
      </div>
    );
  }
}

export default Profile;