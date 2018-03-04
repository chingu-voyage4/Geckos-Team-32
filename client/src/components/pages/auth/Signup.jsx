import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  // constructor() {
  //   super();
  // }

  // componentWillMount() {
  //   console.log('componentWillMount hit!');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount hit!');
  // }

  // sendForm() {
  //   axios.post()
  // }

  render() {
    return (
      <div className="page-wrapper signup-wrapper">
        <h1>Explore the music you love.</h1>
        <h2>Visualize the experience now!</h2>
        <form className="signup-form" action="/routes/signup" method="post">
          <input className="signup-form__input" type="text" name="username" placeholder="username"/>
          <input className="signup-form__input" type="password" name="password" placeholder="password"/>
          <button className="button">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Signup;