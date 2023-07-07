import React, { useState, useEffect } from "react";

import ProductList from "../../Products/components/ProductList";

export default function AllProducts() {
  const [product, setProducts] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (async) => {
    // fetch("https://fakestoreapi.com/products/")
     fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  console.log(product);
  return <ProductList items={product} />;
}
