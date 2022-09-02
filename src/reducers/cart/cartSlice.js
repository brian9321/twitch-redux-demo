import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalCount: 0,
  productsList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProductCart:(state, actions) => {
        state.productsList = [...state.productsList, actions.payload];
        state.totalCount += 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductCart } = cartSlice.actions

export default cartSlice.reducer