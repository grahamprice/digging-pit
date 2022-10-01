import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "flowbite-react";
import ProductCard from "./ProductCard";

function CollectionPage({ products, setProducts, cart, setCart }) {
  let history = useHistory();

  const allProducts = products.map((product) => {
    return (
      <ProductCard
        id={product.id}
        product={product}
        key={product.id}
        setProducts={setProducts}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  return (
    <div
      className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 justify-center"
      // onClick={toMensCard}
    >
      {allProducts}
    </div>
  );
}

export default CollectionPage;
