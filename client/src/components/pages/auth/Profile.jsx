import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Profile extends React.Component {
	componentDidMount() {
    let id = this.props.userId.match.params.id;
		axios.get(`/routes/user/${id}`)
			.then((results) => {
				this.props.handleUpdateUser(results.data.users)
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log('There was an error: ', err);
			});
	}
  
  render() {
    return (
      <div className="page-wrapper">
				<h1>Re-reouting to homepage...</h1>
      </div>
    );
  }
}

export default withRouter(Profile);