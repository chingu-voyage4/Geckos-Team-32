import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
// export const UPDATE_USER = 'UPDATE_USER';
// export const REMOVE_USER = 'REMOVE_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';

export const signupUser = (creds) => {
  const res = axios.get('/routes/signup', creds);
  dispatch({ type: SIGNUP_USER, payload: res.data });
};

export const loginUser = (creds) => {
  const res = axios.get('/routes/login');
  dispatch({ type: LOGIN_USER, payload: res.data });
};


// export const signupUser = (creds) => async dispatch => {
//   const res = await axios.put(`/api/current_user/${id}`, updatedUser);
//   dispatch({ type: UPDATE_USER, payload: res.data });
// };

// const requestLogin = creds => ({
//   type: 'LOGIN_REQUEST',
//   isFetching: true,
//   isAuthenticated: false,
//   creds,
// });