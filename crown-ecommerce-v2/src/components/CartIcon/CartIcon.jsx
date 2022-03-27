import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = () => {
  return <li className="cart-icon">
    <BagIcon className="cart-icon__icon" />
    <span className="cart-icon__count">0</span>
  </li>;
};

export default CartIcon;
