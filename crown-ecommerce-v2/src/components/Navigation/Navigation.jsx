import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import UserContext from "../../contexts/user.context";
import logo from "/src/assets/crown.svg";
import "./navigation.scss";
import { userSignOut } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = async () => {
    await userSignOut();
  }
  return (
    <>
      <div className="navbar-crossline">
        <nav className="navbar container">
          <Link to="/" >
            <img src={logo} alt="Crown logo. Go to homepage." className="navbar__logo" />
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
              { user ?
                <span className="navbar__list-link" onClick={handleSignOut}>Sign Out</span> :
                <Link className="navbar__list-link" to="/auth">
                  Sign In
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
