import React from 'react';

const Login = () => (
  <div className="page-wrapper login-wrapper">
    <h1>Welcome back!</h1>
    <div className="auth-buttons-wrapper">
      <form className="login-form" action="routes/auth/google" method="get">
        <button className="button google-button"><span className="auth-icon"><i className="fab fa-google-plus-g"></i></span> Log in with Google</button>
      </form>
      <form className="login-form" action="routes/auth/facebook" method="get">
        <button className="button facebook-button"><span className="auth-icon"><i className="fab fa-facebook"></i></span> Log in with Facebook</button>
      </form>
    </div>

    <div className="divider">
      <strong className="divider-title">Or</strong>
    </div>

    <form className="login-form" action="/routes/login" method="post">
      <input className="login-form__input" type="text" name="username" placeholder="username"/>
      <input className="login-form__input" type="password" name="password" placeholder="password"/>
      <button className="button">Log in</button>
    </form>
  </div>
);

export default Login;