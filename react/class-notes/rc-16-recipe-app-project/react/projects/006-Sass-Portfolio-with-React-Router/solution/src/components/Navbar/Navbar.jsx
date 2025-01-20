import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            About Me
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            My Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contacts"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
