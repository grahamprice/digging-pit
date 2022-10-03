import React, { useState } from "react";
import { Card } from "flowbite-react";
import FooterHub from "./FooterHub";

function ProductCard({ product, setProducts, id }) {
  const [extraInfo, setExtraInfo] = useState(false);
  const [individualProduct, setIndividualProduct] = useState({});
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: "",
  });
  // console.log(product);

  function handleAddToCart(e) {
    e.preventDefault();
    fetch("/add_to_cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: individualProduct.id,
        quantity: 1,
      }),
    });
  }

  // console.log(cart);

  function handleCardImageClick(event) {
    const prod_id = event.target.id;

    fetch(`/products/${prod_id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts([data]);
        setExtraInfo(true);
        setIndividualProduct(data);
      });
  }

  return (
    <div className="max-w-2xl" id="product-card">
      <div>
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
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ${product.price}
            </p>
            {extraInfo ? (
              <div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>
                <button onClick={handleAddToCart}>Add To Cart</button>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
