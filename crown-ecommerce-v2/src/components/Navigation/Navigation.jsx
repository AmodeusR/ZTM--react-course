import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" >
          <div>Logo</div>
        </Link>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link className="navbar__list-link" to="/shop">
              Shop
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link className="navbar__list-link" to="">
              About
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link className="navbar__list-link" to="">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
