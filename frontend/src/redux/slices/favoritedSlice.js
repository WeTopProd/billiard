import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const favoritedSlice = createSlice({
  name: "favorited",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeToFavorite(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearFavorited(state) {
      state.items = [];
    },
  },
});

export const { addToFavorite, removeToFavorite, clearFavorited } =
  favoritedSlice.actions;

export default favoritedSlice.reducer;
