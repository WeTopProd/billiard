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
      state.items.push(...action.payload);
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
