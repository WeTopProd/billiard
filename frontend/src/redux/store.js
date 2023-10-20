import { configureStore } from '@reduxjs/toolkit';
import favoritedSlice from './slices/favoritedSlice';
import cartSlice from './slices/bascketSlice';
import autorisationReducer from './slices/autorisation';
import goodsSlice from './slices/GoodsSlice';

export const makeStore = configureStore({
  reducer: {
    goodsSlice,
    favoritedSlice,
    cartSlice,
    autorisationReducer
  },
})

export const store = makeStore;



export default store;
