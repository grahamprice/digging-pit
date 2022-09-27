import React from "react";
import { Card } from "flowbite-react";

function ProductCard({ product }) {
  return (
    <div className="max-w-2xl">
      <Card>
        <div>
          <img src={product.image} alt="mens-card-photo" className=""></img>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ${product.price}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
