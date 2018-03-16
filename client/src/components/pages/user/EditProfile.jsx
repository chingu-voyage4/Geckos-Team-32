import React from 'react';
import axios from 'axios';

class EditProfile extends React.Component {
  handleEditData(e) {
    e.preventDefault();

    // Add more profile details here
    let req = {
      username: e.target.elements.username.value
    };
    axios.post(`/routes/user/${this.props.props.userId.match.params.id}/edit`, req);
    this.props.handleEditProfile(req);
  }

  render() {
    // console.log('this is from edit profile: ', this.props);
    const { username } = this.props.props.user.creds;

    return (
      <div>
        <form className="login-form" onSubmit={this.handleEditData.bind(this)}>
          <input className="login-form__input" type="text" name="username" placeholder={username} required/>
          <button className="button">Submit</button>
        </form>
        <button className="button">Delete Account</button>
      </div>
    );
  }
}

export default EditProfile;
