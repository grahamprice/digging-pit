import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "flowbite-react";
import WomensProductCard from "./WomensProductCard";

function WomensPage() {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  const toWomensCard = () => {
    history.push("/womenscard");
  };

  //Product Fetching
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((productArr) => setProducts(productArr));
  }, []);

  const allProducts = products.map((product) => {
    return <WomensProductCard product={product} key={product.id} />;
  });

  return (
    <div className="max-w-sm" onClick={toWomensCard}>
      {allProducts}
    </div>
  );
}

export default WomensPage;
