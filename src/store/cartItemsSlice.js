import { createSlice, current } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItemsSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const itemToBeAdded = action.payload;
      const doesItemExist = state.items.find(
        (item) => item.id === itemToBeAdded.id
      );
      if (!doesItemExist) {
        state.items.push(itemToBeAdded);
      } else {
        const indexOfItem = current(state).items.findIndex(
          (item) => item.id === itemToBeAdded.id
        );
        state.items[indexOfItem].quantity++;
      }
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + itemToBeAdded.price;
    },
    removeItemFromCart(state, action) {
      const itemToBeRemoved = action.payload;
      const indexOfItem = state.items.findIndex(
        (item) => item.id === itemToBeRemoved.id
      );
      if (state.items[indexOfItem].quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== itemToBeRemoved.id
        );
      } else {
        state.items[indexOfItem].quantity--;
      }
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - itemToBeRemoved.price;
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice;
