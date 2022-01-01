import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartItem.totalQuantity);

  function handleCartToggling() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={handleCartToggling}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
