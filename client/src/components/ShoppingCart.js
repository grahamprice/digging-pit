import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/show_cart")
      .then((resp) => resp.json())
      .then((cart) => setCart(cart));
  }, []);

  useEffect(() => {
    console.log("cart");
    console.log(cart);
  }, [cart]);

  const cartItems = cart.map((item) => {
    console.log(item.product);
    return <CartItem item={item.product} key={item.id} cart={cart} />;
  });
  console.log(cart);
  return <div id="cart-div">{cartItems}</div>;
}

export default ShoppingCart;
