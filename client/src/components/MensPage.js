import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "flowbite-react";
import MensProductCard from "./MensProductCard";

function MensPage() {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  const toMensCard = () => {
    history.push("/menscard");
  };

  //Product Fetching
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((productArr) => setProducts(productArr));
  }, []);

  const allProducts = products.map((product) => {
    return <MensProductCard product={product} key={product.id} />;
  });

  return (
    <div className="max-w-sm" onClick={toMensCard}>
      {allProducts}
    </div>
  );
}

export default MensPage;
