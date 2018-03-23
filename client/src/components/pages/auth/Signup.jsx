import React from 'react';
import axios from 'axios';
import { signupUser } from "../../../actions/authenticate";

class Signup extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const creds = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    console.log(creds);
    signupUser(creds);
  }

  render() {
    return (
      <div className="page-wrapper signup-wrapper">
        <div>
          <h1>Explore the music you love.</h1>
          <h2>Visualize the experience now!</h2>
          <div className="auth-buttons-wrapper">
            <form className="form" action="routes/auth/google" method="get">
              <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Sign up with Google</button>
            </form>
            <form className="form" action="routes/auth/facebook" method="get">
              <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Sign up with Facebook</button>
            </form>
          </div>
          <div className="divider">
            <strong className="divider-title">Or</strong>
          </div>
        </div>

        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <input className="form__input" type="text" name="username" placeholder="username"/>
          <input className="form__input" type="password" name="password" placeholder="password"/>
          <button className="button">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;