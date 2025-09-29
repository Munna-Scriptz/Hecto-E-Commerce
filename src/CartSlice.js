import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    CartAllIds: (state, action) => {
      state.value = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { CartAllIds } = cartSlice.actions

export default cartSlice.reducer