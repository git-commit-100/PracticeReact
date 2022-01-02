import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItemsSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    isChanged: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const itemToBeAdded = action.payload;
      const itemInCart = state.items.find(
        (item) => item.id === itemToBeAdded.id
      );
      if (!itemInCart) {
        state.items.push(itemToBeAdded);
      } else {
        itemInCart.quantity++;
      }
      state.isChanged = true;
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + itemToBeAdded.price;
    },

    removeItemFromCart(state, action) {
      const itemToBeRemoved = action.payload;
      const itemInCart = state.items.find(
        (item) => item.id === itemToBeRemoved.id
      );
      if (itemInCart.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== itemToBeRemoved.id
        );
      } else {
        itemInCart.quantity--;
      }
      state.isChanged = true;
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - itemToBeRemoved.price;
    },

    replaceCart(state, action) {
      //state was not changing, so forcefully made state change
      state = Object.assign(state, action.payload);
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice;
