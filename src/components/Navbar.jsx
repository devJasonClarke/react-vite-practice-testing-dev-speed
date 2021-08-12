import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink exact activeClassName="selected" to='/about'>
          Link
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="selected" to='/about'>
          Link
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="selected" to='/about'>
          Link
          </NavLink>
        </li>
      </ul>
      <p>Play Now!</p>
    </nav>
  );
}
