import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FooterHub from "./FooterHub";
// import { Card } from "flowbite-react";
import ProductCard from "./ProductCard";
// import Footer from "./Footer";
import "../styles/Card.css";
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
    <div>
      <div
        className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 justify-center"
        id="product-cards-container"
        // onClick={toMensCard}
      >
        {allProducts}
      </div>
      <FooterHub />
    </div>
  );
}

export default CollectionPage;
