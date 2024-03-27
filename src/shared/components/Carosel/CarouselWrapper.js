import React from "react";

export default function CarouselWrapper(props) {
  return <div className={`${props.className} w-full z-10 `}> {props.children}</div>;
}
