import React, { useState, useEffect } from "react";

import { Carousel } from "flowbite-react";
import CollectionPage from "./CollectionPage";
import FooterHub from "./FooterHub";
import AccIcon from "../assets/AccIcon.png";
import MensIcon from "../assets/MensIcon.png";
import WomensIcon from "../assets/WomensIcon.png";

function Home({ cart, setCart, products, setProducts, searchTerm }) {
  function handleCarouselImageClick(cat_id) {
    fetch(`/categories/${cat_id}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <div className="h-56\\ sm:h-64 xl:h-80 2xl:h-96" id="carousel-container">
        <Carousel>
          <div style={{ top: "70%" }}>
            <img
              onClick={() => handleCarouselImageClick(1)}
              src={MensIcon}
              alt="Mens"
              value="1"
            />
          </div>
          <div style={{ top: "80%", left: "43%" }}>
            <img
              onClick={() => handleCarouselImageClick(2)}
              src={WomensIcon}
              alt="Womens"
              value="2"
            />
          </div>
          <div style={{ top: "80%" }}>
            <img
              onClick={() => handleCarouselImageClick(3)}
              src={AccIcon}
              alt="Accessories"
              value="3"
            />
          </div>
        </Carousel>
        <CollectionPage
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
        />
      </div>
      {/* <FooterHub /> */}
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default Home;
