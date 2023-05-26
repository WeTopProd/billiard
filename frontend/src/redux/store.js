import { configureStore } from '@reduxjs/toolkit';
import favoritedReducer from './slices/favoritedSlice';

export const store = configureStore({
  reducer: {
    favoritedReducer
  },
})
