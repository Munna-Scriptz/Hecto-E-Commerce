import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    cartNum: 0,
  },
  reducers: {
    CartAllIds: (state, action) => {
      state.value = action.payload
    },
    CartNumbers: (state, action) => {
      state.cartNum = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { CartAllIds , CartNumbers } = cartSlice.actions

export default cartSlice.reducer