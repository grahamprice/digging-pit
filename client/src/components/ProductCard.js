import React, { useState } from "react";
import { Card } from "flowbite-react";
// import FooterHub from "./FooterHub";
import "../styles/Card.css";

function ProductCard({ product, setProducts, id }) {
  const [extraInfo, setExtraInfo] = useState(false);
  const [individualProduct, setIndividualProduct] = useState({});

  // const [formData, setFormData] = useState({
  //   product_id: "",
  //   quantity: "",
  // });

  function handleAddToCart() {
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

  // function handleDelete(id) {}

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
    <div className="max-w-sm" id="product-card">
      <div>
        <Card>
          <div>
            {/* <ProductDetails product={product} id={id} /> */}
            <img
              id={id}
              src={product.image ? product.image : product.poster_url}
              alt="mens-card-photo"
              className="card-image"
              onClick={(event) => handleCardImageClick(event)}
            ></img>
            <h5
              className="text-l font-bold tracking-tight text-gray-900 dark:text-white"
              id="product-name"
            >
              {product.name}
            </h5>
            <p
              className="text-m font-normal text-gray-700 dark:text-gray-400"
              id="product-price"
            >
              ${product.price}.00
            </p>
            {extraInfo ? (
              <div>
                <p
                  className="text-m font-normal text-gray-700 dark:text-gray-400"
                  id="product-description"
                >
                  {product.description}
                </p>
                <p
                  className="text-m font-bold text-gray-700 dark:text-gray-400"
                  id="product-size"
                >
                  {product.size}
                </p>
                <button
                  onClick={() => {
                    handleAddToCart();
                    alert("Added To Cart");
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProductCard;
