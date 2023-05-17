import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export default configureStore({
  reducer: rootReducer,
});
