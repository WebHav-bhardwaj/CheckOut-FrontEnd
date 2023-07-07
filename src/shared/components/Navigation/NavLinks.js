import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="lg:flex lg:justify-center">
      <li className="my-custom-text-hover lg:pl-8 lg:pr-8 lg:pb-0 lg:text-center pb-3 w-auto">
        <NavLink to="/" exact>
          Books
        </NavLink>
      </li>
      <li className="my-custom-text-hover lg:pl-8 lg:pr-8 lg:pb-0 lg:text-center pb-3 w-auto">
        <NavLink to="/">Furniture</NavLink>
      </li>
      <li className="my-custom-text-hover lg:pl-8 lg:pr-8 lg:pb-0 lg:text-center pb-3 w-auto">
        <NavLink to="/">Electronics</NavLink>
      </li>
      <li className="my-custom-text-hover lg:pl-8 lg:pr-8 lg:pb-0 lg:text-center pb-3 w-auto">
        <NavLink to="/">Others</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
