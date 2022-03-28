import { useContext } from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import CartContext from "../../contexts/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  return (
    <li className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
      <BagIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{cartItems.length}</span>
    </li>
  );
};

export default CartIcon;
