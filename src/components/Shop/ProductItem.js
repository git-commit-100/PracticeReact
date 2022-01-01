import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartItemsActions } from "../../store/cartItemsSlice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, price, desc } = props;

  function handleAddingItemsToCart() {
    const itemObj = {
      id,
      name,
      price,
      desc,
      quantity: 1,
    };
    dispatch(cartItemsActions.addItemToCart(itemObj));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{desc}</p>
        <div className={classes.actions}>
          <button onClick={handleAddingItemsToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
