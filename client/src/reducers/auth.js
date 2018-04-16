import { SIGNUP_USER, LOGIN_USER } from '../actions/authenticate';

let session = JSON.parse(sessionStorage.getItem('session'));
const initialState = session ? { user: session } : { user: { loggedIn: false, creds: {} }};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        loggedIn: true,
        creds: action.payload,
      };    
    case LOGIN_USER:
      return {
        loggedIn: true,
        creds: action.payload,
      }; 
    default:
      return state;
  }
};