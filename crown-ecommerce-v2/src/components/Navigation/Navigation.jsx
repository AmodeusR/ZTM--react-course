import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import UserContext from "../../contexts/user.context";
import { ReactComponent as Logo } from "/src/assets/crown.svg";
import "./navigation.scss";
import { userSignOut } from "../../utils/firebase/firebase";
import { CartIcon, CartDropdown } from "/src/components";

const Navigation = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = async () => {
    await userSignOut();
  }
  return (
    <>
      <header className="header">
        <div className="navbar-crossline">
          <nav className="navbar container">
            <Link to="/" >
              <Logo className="navbar__logo" alt="Crown logo. Click to go to homepage." />
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
                <CartIcon />
            </ul>
          </nav>
          <CartDropdown />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
