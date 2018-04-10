import React from 'react';

class Signup extends React.Component {
  
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

          <form className="auth-form" action="/routes/signup" method="post">
            <input className="auth-form__input" type="text" name="username" placeholder="username"/>
            <input className="auth-form__input" type="password" name="password" placeholder="password"/>
            <br />
            <br />
            <button className="button auth-submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;