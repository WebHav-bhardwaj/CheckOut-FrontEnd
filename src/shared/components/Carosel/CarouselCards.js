import React from "react";

export default function CarouselCards(props) {
  return (
    <React.Fragment>
      <img
        alt={props.alt}
        className={`${props.className} object-contain lg:object-contain w-full`}
        src={props.src}
      ></img>
    </React.Fragment>
  );
}
