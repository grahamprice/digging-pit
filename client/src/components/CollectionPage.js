import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "flowbite-react";
import ProductCard from "./ProductCard";

function CollectionPage({ products }) {
  let history = useHistory();
  console.log(products);
  // const toMensCard = () => {
  //   history.push("/menscard");
  // };

  //Product Fetching
  // useEffect(() => {
  //   fetch("/products")
  //     .then((res) => res.json())
  //     .then((productArr) => setProducts(productArr));
  // }, []);

  const allProducts = products.map((product) => {
    return <ProductCard product={product} key={product.id} />;
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
