import { combineReducers } from 'redux';
import auth from './auth';
import likedVideos from './likedVideos';

/*
 * Combine all reducer files
 */
const RootReducer = combineReducers({
  auth,
  likedVideos
});

export default RootReducer;