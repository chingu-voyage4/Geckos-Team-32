import React from 'react';
import axios from 'axios';

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
        this.props.handleEditProfile(req);
      });
  }

  render() {
    // console.log('this is from edit profile: ', this.props);
    const { username } = this.props.props;

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
