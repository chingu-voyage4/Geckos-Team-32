import React from 'react';

const Login = (props) => (
  <div className={props.launch ? "page-wrapper nodash" : "page-wrapper login-wrapper"}>
    <div>
      <h1>Welcome back!</h1>
      <div className="auth-buttons-wrapper">
        <form className="form" action="routes/auth/google" method="get">
          <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Log in with Google</button>
        </form>
        <form className="form" action="routes/auth/facebook" method="get">
          <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Log in with Facebook</button>
        </form>
      </div>
      <div className="divider">
        <strong className="divider-title">Or</strong>
      </div>
    </div>

    <form className="form" action="/routes/login" method="post">
      <input className="form__input" type="text" name="username" placeholder="username"/>
      <input className="form__input" type="password" name="password" placeholder="password"/>
      <button className="button">Log in</button>
    </form>
  </div>
);

export default Login;