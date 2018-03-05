import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
  state = {
    userInfo: {},
    foundUser: false,
	}

	componentWillMount() {
		console.log('willmount');
	}

	componentDidMount() {
    console.log('didmount');
    let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				this.setState({ userInfo: results.data.users });
			})
			.catch((err) => {
				console.log('There was an arror: ', err);
			});
	}

	componentWillUpdate() {
		console.log('willupdate');
		console.log('will-updated state: ', this.state);
	}

	componentDidUpdate() {
		console.log('didupdate');
		console.log('did-updated state: ', this.state);
		console.log('url: ', this.props.userId.match.params.id);
  }
  
  render() {
    return (
      <div className="page-wrapper">
        {this.state.userInfo &&
        <h1>This is the profile page for {this.state.userInfo.username}!</h1>
        }
      </div>
    );
  }
}

export default Profile;