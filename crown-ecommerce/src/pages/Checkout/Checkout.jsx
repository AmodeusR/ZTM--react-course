import { useContext } from "react";
import CartContext from "../../contexts/cart.context";
import { CheckoutCard, Button } from "../../components";

import "./checkout.scss";
import currencyFormatter from "../../utils/currencyFormatter";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const FormattedtotalPrice = currencyFormatter.format(totalPrice);

  return (
    <div className="container checkout-body">
      <h1>Checkout</h1>
      <main className="payment-section">
        <div className="payment-section__products">
          {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
            <CheckoutCard
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
              quantity={quantity}
            />
          ))}{" "}
        </div>
        <div className="payment-section__confirmation">
          <Button title="Confirm Payment" className="payment-section__button" />
          <span className="payment-section__total-price">
            {FormattedtotalPrice}
          </span>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
