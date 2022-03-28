import { useContext } from "react";
import { Button, CartItem } from "/src/components";
import CartContext from "../../contexts/cart.context";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <div className="cart-dropdown">
          <div className="cart-dropdown__menu">
            {!!cartItems ||
              <span className="menu__empty-message">Your cart is empty</span>
            }
            { true &&
              cartItems.map(({ id, name, price, imageUrl, quantity }) => (
                <CartItem key={id} title={name} price={price} imgSrc={imageUrl} quantity={quantity} />
              ))
            }
          </div>
          <Button title="Checkout" />
        </div>
      )}
    </>
  );
};

export default CartDropdown;
