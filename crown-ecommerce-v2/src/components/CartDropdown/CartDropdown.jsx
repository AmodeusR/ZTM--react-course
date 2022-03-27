import React from "react";
import { Button } from "/src/components";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <Button title="Checkout" />
    </div>
  );
};

export default CartDropdown;
