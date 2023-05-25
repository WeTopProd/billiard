import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    name: 'Antoniy', 
    age: 27
  },
}

export const favoritedSlice = createSlice({
  name: 'favorited',    
  initialState,
  reducers: {
    increment: (state) => {
    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = favoritedSlice.actions

export default favoritedSlice.reducer