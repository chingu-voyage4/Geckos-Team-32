import { ADD_LIKED_VIDEO, FETCH_USER_VIDEO, DELETE_USER_VIDEO } from '../actions/userVideos';

let videos = JSON.parse(sessionStorage.getItem('videos'));
const initialState = videos ? { videos } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKED_VIDEO:
      return {
        likedVideos: action.payload
      };    
    case FETCH_USER_VIDEO:
      return {
        likedVideos: action.payload
      };
    case DELETE_USER_VIDEO:
      return {
        likedVideos: action.payload
      }
    default:
      return state;
  }
};