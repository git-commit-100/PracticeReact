import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cartItemsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartItem: cartItemsSlice.reducer },
});

export default store;
