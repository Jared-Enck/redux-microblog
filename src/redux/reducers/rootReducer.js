import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './postSlice';

export default combineReducers({ postsReducer });
