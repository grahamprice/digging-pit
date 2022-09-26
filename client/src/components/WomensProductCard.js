import React from "react";
import { Card } from "flowbite-react";
function WomensProductCard({ product }) {
  return (
    <div className="max-w-3xl">
      <Card>
        <img src={product.image} alt="womens-card-photo"></img>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
      </Card>
    </div>
  );
}

export default WomensProductCard;
