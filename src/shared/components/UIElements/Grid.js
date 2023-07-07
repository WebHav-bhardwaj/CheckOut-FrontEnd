import React from "react";

export default function Grid(props) {
  return <ul className={`grid ${props.className}`}>{props.children} </ul>;
}
