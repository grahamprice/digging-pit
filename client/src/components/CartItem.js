import React from "react";

function CartItem({ cart, item }) {
  return (
    <div>
      <div>
        <h2>{cart.name}</h2>
        <p>{item.name}Name</p>
        <p>{item.description}description</p>
        <p>{item.price}price</p>
        <image alt="card-image">{item.image}</image>
      </div>
    </div>
  );
}

export default CartItem;
