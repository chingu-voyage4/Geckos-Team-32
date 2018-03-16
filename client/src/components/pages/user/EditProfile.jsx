import React from 'react';
import axios from 'axios';

class EditProfile extends React.Component {
  handleEditData(e) {
    console.log('THIS GOT HITT YOOOO');
    e.preventDefault();

    const user = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    }

    console.log(user);
    axios.put(`/routes/user/${this.props.props.userId.match.params.id}`, user);
  }

  render() {
    console.log('this is from edit profile: ', this.props);
    console.log('THIS IS THE ROUTE: /routes/', this.props.props.userId.match.params.id);
    const { username, password } = this.props.props.user.creds;

    return (
      <div>
        <form className="login-form" onSubmit={this.handleEditData.bind(this)}>
          <input className="login-form__input" type="text" name="username" placeholder={username}/>
          <input className="login-form__input" type="password" name="password" placeholder="new password"/>
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditProfile;



