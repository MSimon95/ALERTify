import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  
  return (
    <nav className="nav">
      {/* <h1 className="navbar-logo"> </h1> */}
      
      <ul className="nav-list">
      <button className="button1">
              <Link onClick={handleClick} className="nav-links" to="/home">
                <span>About</span>
              </Link>
            </button>
            <button className="button1">
              <Link onClick={handleClick} className="nav-links" to="/user">
                <span>Profile</span>
              </Link>
            </button>
            <button className="button1">
              <Link onClick={handleClick} className="nav-links" to="/groups">
                <span>Group</span>
              </Link>
            </button>
            <button className="button1">
              <Link onClick={handleClick} className="nav-links" to="/alerts">
                <span>Alerts</span>
              </Link>
            </button>
            <button className="button1">
              <Link onClick={handleClick} className="nav-links" to="/group_alerts">
                <span>Calendar</span>
              </Link>
            </button>
      </ul>
    </nav>
  );
}

export default Navbar;