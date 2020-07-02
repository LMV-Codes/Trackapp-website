import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../services/auth";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <h3>Tracky</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/createproject/">
                  New Project
                </NavLink>
              </li>
            </ul>
            {auth.isLoggedIn() ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={auth.logout}>
                    Logout
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link auth-nav" to="/login/">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link auth-nav" to="/register/">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
