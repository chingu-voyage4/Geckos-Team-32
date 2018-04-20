import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../../actions/authenticate';

class Signup extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const creds = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.props.dispatch(signupUser(creds, this.props.userId.history));
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="error-popover" id="deleteErrorMessage">
          <div className="popover-arrow">
          </div>
          <h3 className="popover-header">
            {/* Popover Header */}
            <a className="popover-close" onClick={this.closeErrorMessage}/>
          </h3>
          <div className="popover-body">
            {this.props.errorMessage}
          </div>
        </div>
      );
    }
    window.onclick = (event) => {
      let flashMessage = document.getElementById('deleteErrorMessage')
      if (event.target != flashMessage) {
        flashMessage.style.display = "none";
      }
    }
  }

  closeErrorMessage() {
    let flashMessage = document.getElementById('deleteErrorMessage');
    flashMessage.style.display = "none";
  }

  render() {
    return (
      <div className={this.props.launch ? "page-wrapper signup-wrapper nodash" : "page-wrapper signup-wrapper"}>
        <div className="auth-card">
          <div>
            <h1>Explore the music you love.</h1>
            <h2>Visualize the experience now!</h2>
            <div className="auth-buttons-wrapper">
              <form action="routes/auth/google" method="get">
                <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Sign up with Google</button>
              </form>
              <form action="routes/auth/facebook" method="get">
                <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Sign up with Facebook</button>
              </form>
            </div>
            <div className="divider">
              <strong className="divider-title">Or</strong>
            </div>
          </div>
          <form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
            <input className="auth-form__input" type="text" name="username" placeholder="username" required/>
            <input className="auth-form__input" type="password" name="password" placeholder="password" required/>
            <br />
            <br />
            {this.renderAlert()}
            <button className="button auth-submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errorMessage: state.auth.error
  };
};

export default connect(mapStateToProps)(Signup);