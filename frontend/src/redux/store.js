import { configureStore } from '@reduxjs/toolkit';
import favoritedReducer from './slices/favoritedSlice';
import bascketReducer from './slices/bascketSlice';
import autorisationReducer from './slices/autorisation';

export const store = configureStore({
  reducer: {
    favoritedReducer,
    bascketReducer,
    autorisationReducer
  },
})
