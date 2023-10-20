import { createSlice } from "@reduxjs/toolkit";
import counterCalc from './counter'
import calcTotal from './calcTotal'

const initialState = {
  items: [],
  counter: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,

  reducers: {
    initCart: (state, action) => {
      state.items = action.payload;
      state.counter = counterCalc(state.items)
      state.totalPrice = calcTotal([...state.items])
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    counter: (state) => {
      state.counter = counterCalc(state.items)
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    increment: (state) => {
      state.counter += 1;
    },

    decrement: (state) => {
      state.counter -= 1;
    },


  },
});

export const { initCart, addToCart, removeFromCart, increment, decrement, counter } = cartSlice.actions;
export default cartSlice.reducer;
