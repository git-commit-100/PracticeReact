import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cartActionsThunks";

//prevent sending request on first time
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.isCartVisible);
  const notification = useSelector((state) => state.cart.notification);
  const cart = useSelector((state) => state.cartItem);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      //fetching data
      dispatch(fetchCartData());
      return;
    }

    if (cart.isChanged) {
      //send cart data only when cart really has changed
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
