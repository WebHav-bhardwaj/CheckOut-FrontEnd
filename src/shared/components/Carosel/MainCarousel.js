import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";


import CarouselWrapper from "./CarouselWrapper";

const MainCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <CarouselWrapper>
      <Carousel
        className="carousel-css"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        deviceType={props.deviceType}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {isBigScreen && (
          <div className="flex absolute">
            <img
              alt="books "
              className=""
              src="./Images/CroppedImages/Books.jpg"
            ></img>
          </div>
        )}
        {isBigScreen && (
          <div className="">
            <img
              alt="books "
              className=""
              src="./Images/CroppedImages/Electronics.jpg"
            ></img>
          </div>
        )}
        {isBigScreen && (
          <div className="">
            <img
              alt="books "
              className=""
              src="./Images/CroppedImages/Furniture.jpg"
            ></img>
          </div>
        )}
        {!isBigScreen && (
          <div className="">
            <img alt="books " className="" src="./Images/Books.jpg"></img>
          </div>
        )}
        {!isBigScreen && (
          <div className="">
            <img alt="books " className="" src="./Images/Furniture.jpg"></img>
          </div>
        )}
        {!isBigScreen && (
          <div className="">
            <img alt="books " className="" src="./Images/Electronics.jpg"></img>
          </div>
        )}
      </Carousel>
    </CarouselWrapper>
  );
};

export default MainCarousel;
