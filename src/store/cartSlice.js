import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartVisible: false },
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
