import React from 'react';

class Login extends React.Component {

  render() {
    return (
      <div className={this.props.launch ? "page-wrapper nodash" : "page-wrapper"}>
        <div className="auth-card">
          <div>
            <h1>Welcome back!</h1>
            <div className="auth-buttons-wrapper">
              <form className="form" action="routes/auth/google" method="get">
                <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Google</button>
              </form>
              <form className="form" action="routes/auth/facebook" method="get">
                <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Facebook</button>
              </form>
            </div>
            <div className="divider">
              <strong className="divider-title">Or</strong>
            </div>
          </div>

          <form className="auth-form" action="/routes/login" method="post">
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

export default Login;