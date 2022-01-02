import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartVisible: false, notification: null },
  reducers: {
    toggleVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },

    showNotification(state, action) {
      /* notification: {status: "", title= "", message= ""} */
      const { status, title, message } = action.payload;
      state.notification = { status, title, message };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
