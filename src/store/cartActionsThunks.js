import { cartItemsActions } from "./cartItemsSlice";
import { cartActions } from "./cartSlice";

export function fetchCartData() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-https-61e56-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching Cart Failed");
      }
      const data = await response.json();

      dispatch(
        cartItemsActions.replaceCart({
          items: data.items || [],
          totalPrice: data.totalPrice,
          totalQuantity: data.totalQuantity,
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
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
            totalPrice: cartData.totalPrice,
          }),
        }
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
