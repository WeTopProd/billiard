import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autorisation: false,
  token: '',
};

export const autorisationSlice = createSlice({
  name: "autorisation",
  initialState,
  reducers: {
    loginState(state, action) {
      state.autorisation = action.payload;
      state.autorisation = true
    },
    logoutState(state) {
      state.autorisation = false;
      state.token = ''
    },
    tokenState(state, action) {
      state.token = action.payload
    }
  },
});

export const { loginState, logoutState, tokenState } = autorisationSlice.actions;

export default autorisationSlice.reducer;
