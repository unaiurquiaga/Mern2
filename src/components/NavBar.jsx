import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ column, isOpen, setIsOpen }) => {
  return (
    <nav>
      <ul id="nav-list" style={{ flexDirection: column ? "column" : "row" }}>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/NextDays">Próximos días</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => isOpen && setIsOpen(!isOpen)}>
          <NavLink to="/Cities">Otras ciudades</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;