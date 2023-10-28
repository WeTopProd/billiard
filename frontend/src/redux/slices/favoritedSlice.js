import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [
    {
    count: 0,
  },
]
}
  
export const favoritedSlice = createSlice({
  name: "favorited",
  initialState: initialState,

  reducers: {
    initfavorite: (state, action) => {
      state.push(action.payload);
    },

    initfavoriteIn: (state, action) => {
      state.items = action.payload;
    },

    addToFavorite(state, action) {
      state.items.push(action.payload);
    },

    removeToFavorite(state, action) {
      state.items = state.items.filter(item => item.id != action.payload);
    },
    clearFavorited(state) {
      state.items = [];
    },
  },
});

export const { addToFavorite, removeToFavorite, clearFavorited, initfavorite, initfavoriteIn } =
  favoritedSlice.actions;

export default favoritedSlice.reducer;
