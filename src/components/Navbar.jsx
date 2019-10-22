import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="Navbar">
    <ul className="Menu">
      <li>
        <NavLink activeClassName="active" exact to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page1">
          Page 1
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page2">
          Page 2
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/page3">
          Page 3
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
