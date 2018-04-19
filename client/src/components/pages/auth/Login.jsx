import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authenticate';

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const creds = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.props.dispatch(loginUser(creds, this.props.userId.history));
  }

  render() {
    return (
      <div className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}>
        <div className="auth-card">
          <div>
            <h1>Welcome back!</h1>
            <div className="auth-buttons-wrapper">
              <form action="routes/auth/google" method="get">
                <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Google</button>
              </form>
              <form action="routes/auth/facebook" method="get">
                <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Facebook</button>
              </form>
            </div>
            <div className="divider">
              <strong className="divider-title">Or</strong>
            </div>
          </div>

          <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
            <input className="auth-form__input" type="text" name="username" placeholder="username" />
            <input className="auth-form__input" type="password" name="password" placeholder="password" />
            <br />
            <br />
            <button className="button auth-submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);