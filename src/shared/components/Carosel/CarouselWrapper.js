import React from "react";

export default function CarouselWrapper(props) {
  return <div className="w-full z-10 h-1/3"> {props.children}</div>;
}
