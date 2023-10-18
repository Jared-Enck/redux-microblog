'use client'
import { configureStore } from '@reduxjs/toolkit';
import root from './reducers/rootReducer';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    root,
  },
});
