import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import "../App.css";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>

        <ul className="navbar-links">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile/:userId">Profile</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
