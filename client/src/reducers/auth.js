// import { FETCH_USER, LOGOUT_USER, UPDATE_USER, DELETE_USER } from '../actions/authenticate';
import { LOGIN_USER, FETCH_USER, AUTH_ERROR, LOGOUT_USER, UPDATE_USER, DELETE_USER } from '../actions/types';
let session = JSON.parse(sessionStorage.getItem('session'));
const initialState = session ? { loggedIn: true, creds: session, error: '' } : { loggedIn: false, creds: {}, error: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: //loginuser? authuser?
      return {
        error: '',
        loggedIn: true,
        creds: action.payload,
      };
    case LOGOUT_USER:
      return {
        error: '',
        loggedIn: false,
        creds: {}
      };
    case UPDATE_USER:
      return {
        error: '',
        loggedIn: true,
        creds: action.payload
      };
    case DELETE_USER:
      return {
        error: '',
        loggedIn: false,
        creds: {}
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
        creds: {}
      };
    default:
      return state;
  }
};