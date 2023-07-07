import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className=" fixed left-0 top-0 z-50 h-full w-9/12 bg-white shadow-md" onClick={props.onClick}>
        {props.children}
        
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
