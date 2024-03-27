import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationMenu from "../UIElements/NotificationMenu";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import LogoutIcon from '@mui/icons-material/Logout';
import Backdrop from "../UIElements/Backdrop";
import { AuthContext } from "../Context/auth-context";

export default function NavIcons() {
  const DUMMY_RECEIVED_REQUESTS = [
    {
      requestId: 2,
      sendersId: 1,
      receiversId: 2,
      senderUserName: "Vaibhav15",
      productName: "Apple Earpods",
      status: false,
      message: "I Want to buy your product",
      productId: 3,
      offeredPrice: 8000,
    },
    {
      requestId: 2,
      sendersId: 1,
      receiversId: 2,
      senderUserName: "Raghav_1987",
      productName: "Electronics Book by Thara Bhai Jogender",
      status: false,
      message: "I Want to buy your product",
      productId: 3,
      offeredPrice: 600,
    },
  ];

  const auth = useContext(AuthContext);

  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(true);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <React.Fragment>
      {dropdown && <Backdrop onClick={closeDropdown} />}
      <ul className="text-3xl flex justify-end">
        {!auth.isLoggedIn && (
          <li className="my-custom-text-hover pr-2 lg:pr-6">
            <NavLink to="/user/auth">
              <AccountBoxIcon fontSize="inherit" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="my-custom-text-hover pr-2 lg:pr-6">
            <NavLink to="/user/cart">
              <FavoriteIcon fontSize="inherit" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="my-custom-text-hover pr-2 lg:pr-6">
            <NavLink to="/Add-Product">
              <ControlPointIcon fontSize="inherit" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li
            className="my-custom-text-hover pr-2 lg:pr-6"
            onClick={dropdownHandler}
          >
            <NotificationsIcon />
          </li>
        )}
        {dropdown && <NotificationMenu menuItems={DUMMY_RECEIVED_REQUESTS} />}
      </ul>
    </React.Fragment>
  );
}
