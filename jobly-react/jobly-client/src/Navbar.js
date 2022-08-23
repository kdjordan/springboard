import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink exact to="/">
          Jobly
        </NavLink>
      </div>

        <div className="nav-right">
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
      </nav>
  );
}

export default NavBar;
