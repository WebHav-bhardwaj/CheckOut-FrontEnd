import React from "react";

import MainCarousel from "../components/Carosel/MainCarousel";
import MainHeading from "../components/UIElements/MainHeading";
import AllProducts from "../components/AllProducts";

export default function HomePage() {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <React.Fragment>
      <MainCarousel deviceType="mobile" />
      <MainHeading>
        <h2>Explore Our Wide Range OF Products</h2>
      </MainHeading>
      <AllProducts />
    </React.Fragment>
  );
}
