import React from "react";

export default function NotificationMenu(props) {
  return (
    <div className="bg-white w-11/12 top-16 right-4 flex flex-col absolute lg:top-16 lg:right-8 lg:w-2/5 DropDownMenu">
      <ul className="text-lg text-start flex flex-col justify-center gap-4">
        {props.menuItems?.map((item) => (
          <li className="">
            <h1>New offer</h1>
            <h1>Offered By:{item.senderUserName}</h1>
            <h1>On Product:{item.productName}</h1>
            <h1>Offered Price:{item.offeredPrice}</h1>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .DropDownMenu::before {
          content: "";
          position: absolute;
          top: -0.6rem;
          right: 1.15rem;
          width: 20px;
          height: 20px;
          transform: rotate(45deg);
          background-color: white;
        }
      `}</style>
    </div>
  );
}
