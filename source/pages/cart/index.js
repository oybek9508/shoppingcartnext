import React from "react";
import CartList from "../../components/cart/CartList";
import PrimarySearchAppBar from "../../components/Layout";

const Cart = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <CartList />
    </div>
  );
};

export default Cart;
