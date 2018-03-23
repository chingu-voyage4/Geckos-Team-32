import { SIGNUP_USER, LOGIN_USER } from '../actions/authenticate';

export default (
  state = {
    user: {
      loggedIn: false,
      creds: {}
    }
  }, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return Object.assign({}, state, {
        loggedIn: true,
        creds: action.payload,
      });    
    case LOGIN_USER:
      return Object.assign({}, state, {
        loggedIn: true,
        creds: action.payload,
      }); 
    default:
      return state;
  }
};