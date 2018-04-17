import { FETCH_USER, LOGOUT_USER, UPDATE_USER, DELETE_USER } from '../actions/authenticate';

let session = JSON.parse(sessionStorage.getItem('session'));
const initialState = session ? { loggedIn: true, creds: session } : { loggedIn: false, creds: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        loggedIn: true,
        creds: action.payload,
      };
    case LOGOUT_USER:
      return {
        loggedIn: false,
        creds: {}
      }
    case UPDATE_USER:
      return {
        loggedIn: true,
        creds: action.payload
      }
    case DELETE_USER:
      return {
        loggedIn: false,
        creds: {}
      }
    default:
      return state;
  }
};