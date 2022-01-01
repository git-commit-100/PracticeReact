import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  function handleCartToggling() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={handleCartToggling}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
