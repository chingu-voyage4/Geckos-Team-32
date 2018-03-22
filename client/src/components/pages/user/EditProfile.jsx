import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class EditProfile extends React.Component {
  handleEditData(e) {
    e.preventDefault();

    // Add more profile details here
    let req = {
      username: e.target.elements.username.value
    };
    axios.post(`/routes/user/${this.props.id}/edit`, req)
      .then((results) => {
        results.data.response === 'taken' ?
        alert('Sorry, that username is already taken.') :
        this.props.handleEditProfile(results.data.response);
      });
  }

  handleDeleteUser() {
    // Temporarily warning for handling DELETE route
    const warning = confirm('Are you sure?');
    if (warning) {
      axios.get(`/routes/user/${this.props.id}/delete`)
      .then((results) => {
        if (results.data.response === 'deleted') {
          this.props.props.handleUpdateAfterDelete();
          this.props.history.push('/');
        }
      });
    }
  }

  render() {
    // console.log('this is from edit profile: ', this.props);
    const { username } = this.props.creds;

    return (
      <div>
        <form className="form" onSubmit={this.handleEditData.bind(this)}>
          <input className="form__input" type="text" name="username" placeholder={username} required/>
          <button className="button">Submit</button>
        </form>
        <br />
        <button className="button delete" onClick={this.handleDeleteUser.bind(this)}>Delete Account</button>
      </div>
    );
  }

}

export default withRouter(EditProfile);
