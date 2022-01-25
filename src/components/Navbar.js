import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Impact
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/">
                    Menu One
                  </Link>
                </li>
                <li className="dropdown-hover">
                  <Link className="dropdown-item" to="/" >
                    Menu Two &rsaquo;
                  </Link>
                  <ul className="dropdown-list">
                    <li>Sub Menu 1</li>
                    <li>Sub Menu 2</li>
                    <li>Sub Menu 3</li>
                  </ul>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/">
                    Menu Three
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
