import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import PayPal from "./PayPal";
function ShoppingCart({ onDeleteProduct, product }) {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    fetch("/show_cart")
      .then((resp) => resp.json())
      .then((cart) => setCart(cart));
  }, []);

  useEffect(() => {
    // console.log("cart");
    console.log(cart);
  }, [cart]);

  // function handleDeleteClick() {
  //   fetch(`/cart_items/`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       onDeleteProduct(product);
  //     });
  // }

  const cartItems = cart.map((item) => {
    console.log(item);
    return (
      <CartItem
        product={item.product}
        key={item.id}
        quantity={item.quantity}
        // handleDeleteClick={handleDeleteClick}
      />
    );
  });

  let cartTotal = 0;
  cart.forEach((item) => (cartTotal += item.product.price * item.quantity));
  // console.log(cartTotal);
  return (
    <section className="h-100" style={{ backgroundColor: "white" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 justify-center text-black">
                Shopping Cart
              </h3>
              <div></div>
            </div>
            {cartItems}
            <div className="card">
              <div className="total">Total: ${cartTotal}</div>
              <br />
              <div className="card-body">
                {checkout ? (
                  <PayPal cartTotal={cartTotal} />
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                    onClick={() => {
                      setCheckout(true);
                    }}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
