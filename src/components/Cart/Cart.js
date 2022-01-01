import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const itemsInCart = useSelector((state) => state.cartItem.items);
  const totalPrice = useSelector((state) => state.cartItem.totalPrice);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsInCart.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <h3>
        Total- <p>{totalPrice}$</p>
      </h3>
    </Card>
  );
};

export default Cart;
