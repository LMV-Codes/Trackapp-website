import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="sidenavbar">
          <Link className="brand" to="/">
            <h1>Tracky</h1>
          </Link>
          <NavLink className="sidelink" to="/register/">
            Register
          </NavLink>
          <NavLink className="sidelink" to="/login/">
            Login
          </NavLink>
          <NavLink className="sidelink" to="/createproject/">
            New Project
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
