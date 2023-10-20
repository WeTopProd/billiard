import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const goodsSlice = createSlice({
    name: 'goodsSlice',
    initialState: {
        items: [],
    },
    reducers: {
        initGoods: (state, action) => {
            state.items = action.payload;
        }
    },
});
export const { initGoods } = goodsSlice.actions
export default goodsSlice.reducer;