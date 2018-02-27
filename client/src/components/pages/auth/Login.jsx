import React from 'react';

const Login = () => (
  <div className="page-wrapper login-wrapper">
    <h1>Welcome back!</h1>
    <form className="login-form">
      <input className="login-form__input" type="text" name="username" placeholder="username"/>
      <input className="login-form__input" type="password" name="password" placeholder="password"/>
      <button className="button">Log in</button>
    </form>
  </div>
);

export default Login;