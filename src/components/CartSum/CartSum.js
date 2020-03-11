import React from "react";
import { Typography } from 'antd';
import "./CartSum.css";

const { Text } = Typography;

const CartSum = props => {
  return (
    <div className="total-cart-container">
      <Text className="custom-title">CART TOTAL: <span className="price-style">{props.cartTotal}</span></Text>
    </div>
  );
};

export default CartSum;
