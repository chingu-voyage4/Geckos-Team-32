import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


/*
 * LOGIN USER ACTION
 * Pass in credentials to login route on backend
 * Dispatch type and data
 */
export const loginUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post('/routes/login', creds);
    if (typeof res.data === 'object') {
      dispatch({ type: 'LOGIN_USER', payload: res.data });
      sessionStorage.setItem('session', JSON.stringify(res.data));
      history.push(`/user/${res.data._id}`);
    } else {
      window.location.reload(); // error logging in, handle flash message here
    }
  }
};

/*
 * SIGNUP USER ACTION
 * Pass in credentials to signup route on backend
 * Dispatch type and data
 */
export const signupUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post('/routes/signup', creds);
    if (typeof res.data === 'object') {
      dispatch({ type: 'SIGNUP_USER', payload: res.data });
      sessionStorage.setItem('session', JSON.stringify(res.data));
      history.push(`/user/${res.data._id}`);
    } else {
      window.location.reload() // error signing up, handle flash message here
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