import axios from 'axios';
// import { history } from '../helpers/history';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
// export const UPDATE_USER = 'UPDATE_USER';
// export const REMOVE_USER = 'REMOVE_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';


/*
 * LOGIN USER ACTION
 * Pass in credentials to login route on backend
 * Dispatch type and data
 */
export const loginUser = (creds, history) => {
  return async dispatch => {
    console.log('from auth action: ', creds);
    const res = await axios.post('/routes/login', creds);
    dispatch({ type: 'LOGIN_USER', payload: res.data });
    history.push(`/user/${creds._id}`);
  }
};

/*
 * SIGNUP USER ACTION
 * Pass in credentials to signup route on backend
 * Dispatch type and data
 */
export const signupUser = (creds, history) => {
  return async dispatch => {
    console.log('from auth action: ', creds);
    const res = await axios.post('/routes/signup', creds);
    dispatch({ type: 'SIGNUP_USER', payload: res.data });
    history.push('/');
  }
};