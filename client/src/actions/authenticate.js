import axios from 'axios';
import { FETCH_USER, AUTH_ERROR, LOGOUT_USER, UPDATE_USER, DELETE_USER } from './types'

// export const FETCH_USER = 'FETCH_USER'; //change to AUTH_USER for semantic meaning?
// export const UPDATE_USER = 'UPDATE_USER';
// export const DELETE_USER = 'DELETE_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';
// export const AUTH_ERROR =  'authError';?


/*
 * LOGIN USER ACTION
 * Pass in credentials to login route on backend
 */
export const loginUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post('/routes/login', creds);
    if (typeof res.data === 'object') {
      history.push(`/user/${res.data._id}`);
    } else {
      console.log('attempt failed');
      window.location.reload();
      // error logging in, handle flash message here
      dispatch(authError('Bad Login Info'));
    }
  }
};

/*
 * FETCH USER ACTION
 * Pass in ID to backend route
 * Dispatch type and data
 */
export const fetchUser = (id, history) => {
  return async dispatch => {
    const res = await axios.get(`/routes/user/${id}`);
    if (typeof res.data === 'object') {
      dispatch({ type: FETCH_USER, payload: res.data });
      sessionStorage.setItem('session', JSON.stringify(res.data));
    } else {
      // history.push('/'); 
      // error validating user, handle flash message here
      dispatch(authError('Bad Login Info'));
    }
  }
}

/*
 * SIGNUP USER ACTION
 * Pass in credentials to signup route on backend
 */
export const signupUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post('/routes/signup', creds);
    if (typeof res.data === 'object') {
      history.push(`/user/${res.data._id}`);
    } else {
      // window.location.reload() S
      // error signing up, handle flash message here
      dispatch(authError('That account is already in use'));
    }
  }
};

/*
 * LOGOUT USER ACTION
 * Dispatch type
 */
export const logoutUser = () => {
  return dispatch => {
    axios.get('routes/logout');
    dispatch({ type: 'LOGOUT_USER'});
    sessionStorage.removeItem('session');
    sessionStorage.removeItem('videos');
    window.location.reload() // refresh page and handle flash message here
  }
}

/*
 * EDIT USER ACTION
 * Pass in new credentials to backend
 * Dispatch type and data
 */
export const editUser = (newCreds) => {
  return async dispatch => {
    const res = await axios.get(`/routes/user/${newCreds._id}`);
    dispatch({ type: 'UPDATE_USER', payload: res.data });
    sessionStorage.setItem('session', JSON.stringify(res.data));
  }
}

/*
 * DELETE USER ACTION
 * Pass in credentials to delete route on backend
 * Dispatch type
 */
export const deleteUser = (id, history) => {
  console.log('deleting...: ', id);
  return async dispatch => {
    const res = await axios.delete(`/routes/user/${id}/delete`);
    if (res.data.response === 'deleted') {
      sessionStorage.removeItem('session');
      sessionStorage.removeItem('videos');
      dispatch({ type: 'DELETE_USER'});
      history.push('/');
      // window.location.reload(); // find a way to refresh page
    }
  }
}



export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}