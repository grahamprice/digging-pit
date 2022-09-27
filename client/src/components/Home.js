import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Carousel } from "flowbite-react";
import CollectionPage from "./CollectionPage";

function Home() {
  const [products, setProducts] = useState([]);

  function handleCarouselImageClick(cat_id) {
    fetch(`/categories/${cat_id}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  console.log(products);
  return (
    <div className="h-56\\ sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          onClick={() => handleCarouselImageClick(1)}
          src="https://as2.ftcdn.net/v2/jpg/05/15/74/87/1000_F_515748751_UULFUukHEJHmyB0LOMyl5QAazb9G1Jg6.jpg"
          alt="Mens"
          value="1"
        />
        <img
          onClick={() => handleCarouselImageClick(2)}
          src="https://as2.ftcdn.net/v2/jpg/04/25/98/85/1000_F_425988540_nF96Y9CquiUeYp0zoSylEUzQPNfrFMZs.jpg"
          alt="Womens"
          value="2"
        />
        <img
          onClick={() => handleCarouselImageClick(3)}
          src="https://as2.ftcdn.net/v2/jpg/05/29/76/79/1000_F_529767940_tZ5qRliV04YImJDLFyVEKrKSb2gzf48K.jpg"
          alt="Accessories"
          value="3"
        />
      </Carousel>
      <CollectionPage products={products} />
    </div>
  );
}

export default Home;
