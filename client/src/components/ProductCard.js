import React, { useState } from "react";
import { Card } from "flowbite-react";
// import ProductDetails from "./ProductDetails";
function ProductCard({ product, setProducts, id }) {
  //
  function handleCardImageClick(event) {
    const prod_id = event.target.id;

    fetch(`/products/${prod_id}`)
      .then((res) => res.json())
      .then((data) => setProducts([data]));
  }

  return (
    <div className="max-w-2xl">
      <Card>
        <div>
          {/* <ProductDetails product={product} id={id} /> */}
          <img
            id={id}
            src={product.image}
            alt="mens-card-photo"
            className=""
            onClick={(event) => handleCardImageClick(event)}
          ></img>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ${product.price}
          </p>
          {/* <button> View </button> */}
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
