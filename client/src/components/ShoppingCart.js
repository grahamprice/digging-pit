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
  return (
    <section class="h-100" style={{ "background-color": "white" }}>
      <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-10">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
              <div>
                <p class="mb-0">
                  <span class="text-muted">Sort by:</span>
                  <a href="#!" class="text-body">
                    price <i class="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>
            {cartItems}
            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-warning btn-block btn-lg">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
