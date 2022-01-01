import classes from "./CartItem.module.css";
import { cartItemsActions } from "../../store/cartItemsSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, quantity, price } = props.item;
  const itemObj = { id, name, quantity, price };

  function handleAddingItemToCart() {
    dispatch(cartItemsActions.addItemToCart(itemObj));
  }

  function handleRemovingItemFromCart() {
    dispatch(cartItemsActions.removeItemFromCart(itemObj));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemovingItemFromCart}>-</button>
          <button onClick={handleAddingItemToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
