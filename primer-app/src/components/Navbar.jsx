import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/home" className="active">
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/about"> About </NavLink>
      <NavLink to="contact"> Contact </NavLink>
      {/* <a href="/home">Home</a>
      <a href="/about">About</a>
  <a href="contact">Contact</a> */}
    </div>
  );
};
