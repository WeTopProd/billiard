import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPriceBascket: 0,
  itemsBascket: [],
};

export const baskcetSlice = createSlice({
  name: "bascket",
  initialState,
  reducers: {
    addToBascket(state, action) {
      const findItem = state.itemsBascket.find((obj) => obj.id == action.payload.id);
      
      if (findItem) {
        findItem.count++;
      } else {

        state.itemsBascket.push(...action.payload);
      }
      state.totalPriceBascket = state.itemsBascket.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeToBascket(state, action) {
      const findItem = state.itemsBascket.find((obj) => obj.id == action.payload.id);

      if (findItem.count > 0) {
        findItem.count--;
      }
      if (findItem.count == 0) {
        state.itemsBascket = state.itemsBascket.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    deleteCart(state, action) {
      state.itemsBascket = state.itemsBascket.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearBascket(state) {
      state.itemsBascket = [];
    },
  },
}); 

export const { addToBascket, removeToBascket, clearBascket, deleteCart } =
  baskcetSlice.actions;

export default baskcetSlice.reducer;
