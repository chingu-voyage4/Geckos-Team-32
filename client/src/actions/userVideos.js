import axios from 'axios';

export const ADD_USER_VIDEO = 'ADD_USER_VIDEO';
export const FETCH_USER_VIDEO = 'FETCH_USER_VIDEO';
export const DELETE_USER_VIDEO = 'DELETE_USER_VIDEO';

/*
 * ADD LIKED VIDEO ACTION
 * Pass in video
 * Dispatch type and data
 */
export const addLikedVideo = (id, video) => {
  return async dispatch => {
    const res = await axios.post(`/routes/user/${id}/videos`, video);
    dispatch({ type: 'ADD_USER_VIDEO', payload: res.data });
  }
};

/*
 * FETCH LIKED VIDEOS ACTION
 * Pass in user ID
 * Dispatch type and data
 */
export const fetchLikedVideo = (id) => {
  return async dispatch => {
    const res = await axios.get(`/routes/user/${id}/videos`);
    sessionStorage.setItem('videos', JSON.stringify(res.data));
    dispatch({ type: 'FETCH_USER_VIDEO', payload: res.data });
  }
};

/*
 * REMOVE LIKED VIDEOS ACTION
 * Pass in user ID
 * Dispatch type and data
 */
export const deleteLikedVideo = (id, video) => {
  return async dispatch => {
    const res = await axios.delete(`/routes/user/${id}/videos/delete/${video}`);
    sessionStorage.setItem('videos', JSON.stringify(res.data));
    dispatch({ type: 'DELETE_USER_VIDEO', payload: res.data });
  }
};