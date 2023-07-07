import React from "react";

const MainHeader = (props) => {
  return (
    <header className=" z-40 bg-BackDropMain flex w-full pl-6 pr-6 h-14 items-center top-0 left-0 shadow-md fixed justify-between ">
      {props.children}
    </header>
  );
};

export default MainHeader;
