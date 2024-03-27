import React from "react";

import MainCarousel from "../components/Carosel/MainCarousel";
import CarouselWrapper from "../components/Carosel/CarouselWrapper";
import MainHeading from "../components/UIElements/MainHeading";
import AllProducts from "../components/AllProducts";

export default function HomePage() {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((json) => console.log(json));

  const DUMMY_CAROUSEL_ITEMS = [
    {
      bigScreen: true,
      alt: "Furniture Image",
      src: "./Images/CroppedImages/Furniture.jpg",
    },
    {
      bigScreen: true,
      alt: "Books Image",
      src: "./Images/CroppedImages/Books.jpg ",
    },
    {
      bigScreen: true,
      alt: "Electronics Images",
      src: "./Images/CroppedImages/Electronics.jpg ",
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: "./Images/Books.jpg",
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: "./Images/Electronics.jpg ",
    },
    {
      bigScreen: false,
      alt: "Electronics Images",
      src: "./Images/Furniture.jpg ",
    },
  ];

  return (
    <React.Fragment>
      <CarouselWrapper>
        <MainCarousel items={DUMMY_CAROUSEL_ITEMS} imageClasses='h-64 lg:h-full' className=' h-96' deviceType="mobile" />
      </CarouselWrapper>
      <MainHeading>
        <h2>Explore Our Wide Range OF Products</h2>
      </MainHeading>
      <AllProducts />
    </React.Fragment>
  );
}
