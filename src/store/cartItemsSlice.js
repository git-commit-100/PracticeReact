import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cartSlice";

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
      const itemInCart = state.items.find(
        (item) => item.id === itemToBeAdded.id
      );
      if (!itemInCart) {
        state.items.push(itemToBeAdded);
      } else {
        itemInCart.quantity++;
      }
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
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - itemToBeRemoved.price;
    },
  },
});

//thunk for side-effect code
export function sendCartData(cartData) {
  return async (dispatch) => {
    try {
      //show pending notification
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Cart data is being sent.....",
        })
      );

      //https request
      const response = await fetch(
        "https://react-https-61e56-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cartData) }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      //success notification
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data successfully updated",
        })
      );
    } catch (err) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: err.message,
        })
      );
    }
  };
}

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice;
