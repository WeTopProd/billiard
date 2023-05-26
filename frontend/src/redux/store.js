import { configureStore } from '@reduxjs/toolkit';
import favoritedReducer from './slices/favoritedSlice';
import bascketReducer from './slices/bascketSlice';

export const store = configureStore({
  reducer: {
    favoritedReducer,
    bascketReducer
  },
})
