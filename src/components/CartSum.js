import React from "react";
import "./CartSum.css";

const CartSum = props => {
  return (
    <div className="total-cart-container">
      <h2>CART TOTAL: <span className={'cart-total'}>{props.cartTotal}</span></h2>
    </div>
  );
};

export default CartSum;
