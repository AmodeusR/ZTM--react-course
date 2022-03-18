import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import logo from "/src/assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navbar-crossline">
        <nav className="navbar container">
          <Link to="/" >
            <img src={logo} alt="Crown logo. Go to homepage." />
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
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
