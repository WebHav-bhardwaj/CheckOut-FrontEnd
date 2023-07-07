import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationMenu() {
  const DUMMY_RECEIVED_REQUESTS = [
    {
      requestId: 2,
      sendersId: 1,
      receiversId: 2,
      senderUserName:"Vaibhav15",
      productName:"Apple Earpods",
      status: false,
      message: "I Want to buy your product",
      productId: 3,
      offeredPrice:8000
    },
    {
      requestId: 2,
      sendersId: 1,
      receiversId: 2,
      senderUserName:"Raghav_1987",
      productName:"Electronics Book by Thara Bhai Jogender",
      status: false,
      message: "I Want to buy your product",
      productId: 3,
      offeredPrice:600
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <NotificationsIcon
        fontSize="inherit"
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      ></NotificationsIcon>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 2,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {DUMMY_RECEIVED_REQUESTS.map((item) => (
          <MenuItem>
          <div className="w-2/3">
            <h1>New offer</h1>
            <h1>Offered By:{item.senderUserName}</h1>
            <h1>On Product:{item.productName}</h1>
            <h1>Offered Price:{item.offeredPrice}</h1>
          </div>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
