import { combineReducers } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import postReducer from './postSlice';

export default combineReducers({ titleReducer, postReducer });
