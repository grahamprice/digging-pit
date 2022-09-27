import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "flowbite-react";
import ProductCard from "./ProductCard";

function CollectionPage({ products, setProducts }) {
  let history = useHistory();
  // console.log(products);

  const allProducts = products.map((product) => {
    console.log(product);
    return (
      <ProductCard
        id={product.id}
        product={product}
        key={product.id}
        setProducts={setProducts}
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
