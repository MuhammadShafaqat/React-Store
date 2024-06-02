import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalItems: 0, 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(i => i.id === item.id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += item.quantity; // Update quantity of existing item
      } else {
        state.cartItems.push(item); // Add new item to cartItems array
      }
      // Update totalItems count by the quantity of the added item
      state.totalItems += item.quantity;
    },
     deleteFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    updateCartItem: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, updateCartItem } = cartSlice.actions

export default cartSlice.reducer