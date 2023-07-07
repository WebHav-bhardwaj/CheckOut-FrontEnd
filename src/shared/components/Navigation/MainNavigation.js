import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import NavIcons from "./NavIcons";

export default function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <MainHeader>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <h1 className="text-4xl pt-4 pb-4 pl-4">CATEGORIES</h1>
        <hr className=" bg-black border-black ml-3 mr-3" />
        <nav className=" text-2xl  pt-4 pb-4 pl-4">
          <NavLinks />
        </nav>
      </SideDrawer>
      <button
        onClick={openDrawerHandler}
        className="MainNavigationButton lg:w-1/4 justify-end"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="HeaderLogo text-3xl lg:w-1/4  text-center lg:text-left">
        <h1>
          <Link to="/"> CheckOut </Link>
        </h1>
      </div>
      <nav className="text-[20px] pl-4 pr-4 lg:w-2/4 lg:block hidden">
        <NavLinks />
      </nav>
      <nav className=" lg:w-1/4 text-end ">
        <NavIcons />
      </nav>

      
      <style jsx>{`
        .HeaderLogo {
          font-family: "Lora", serif;
        }
        .MainNavigationButton {
          height: 1.5rem;
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          cursor: pointer;
        }
        .MainNavigationButton span {
          background: #7b7975;
          display: block;
          width: 1.4rem;
          height: 2.5px;
        }
        @media (min-width: 1024px) {
          .MainNavigationButton {
            display: none;
          }
        }
      `}</style>
    </MainHeader>
  );
}
