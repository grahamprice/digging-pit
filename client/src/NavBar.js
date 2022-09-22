import React from "react";
import { useHistory, Link } from "react-router-dom";

function NavBar({ handleLogout, isLoggedIn, handleClick }) {
  let history = useHistory();
  return (
    <div id="navbar">
      <img
        id="navbar-logo"
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bravo_TV_%282017_Logo%29.png/793px-Bravo_TV_%282017_Logo%29.png?20170210001612"
        alt=""
        onClick={handleClick}
      />
      <span id="banner">
        {isLoggedIn ? (
          <>
            <Link className="route-link" to="/">
              Home
            </Link>
            <Link className="route-link" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link className="route-link" to="/login">
              Login
            </Link>
            <Link className="route-link" to="/signup">
              Signup
            </Link>
          </>
        )}
      </span>
    </div>
  );
}
export default NavBar;
