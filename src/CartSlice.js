import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cartNum: 0,
  },
  reducers: {
    cartIds: (state, action) => {
      state.value += action.payload
    },
    CartNumbers: (state, action) => {
      state.cartNum += action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { cartIds , CartNumbers } = cartSlice.actions

export default cartSlice.reducer