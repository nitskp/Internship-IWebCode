import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {

  const showNavLinks = () => {
    const list = document.getElementsByClassName('navbar__links');
    const crossButton = document.getElementsByClassName('navbar__cross-icon-container')[0].firstChild;
    list[0].style.display = "flex";
    crossButton.style.display = "block";
    
  }

  const closeNavLinks = () => {
    const list = document.getElementsByClassName('navbar__links');
    const crossButton = document.getElementsByClassName('navbar__cross-icon-container')[0].firstChild;
    list[0].style.display = "none";
    crossButton.style.display = "none";
    
  }


  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="index.html">Impact</Link>
      </div>
      <div className="navbar__hamburger-icon-container">
        <button onClick={showNavLinks}>
        <i class="fas fa-bars fa-2x"></i>
        </button>
      </div>
      <div className="navbar__cross-icon-container">
        <button onClick={closeNavLinks}>&#43;</button>
      </div>
      
      <ul className="navbar__links">
        <li className="navbar__links--active">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__dropdown--hover">
          <Link to="/">
            Dropdown 
            <span>&#94;</span>
          </Link>
          <ul className="navbar__dropdown">
            <li>
              <Link to="/">Menu One</Link>
            </li>
            <li className="navbar__side-dropdown--hover">
              <Link to="/">
                Menu Two 
                <span>&#94;</span>
              </Link>
              <ul className="navbar__side-dropdown">
                <li>
                  <Link to="/">Sub Menu One</Link>
                </li>
                <li>
                  <Link to="/">Sub Menu Two</Link>
                </li>
                <li>
                  <Link to="/">Sub Menu Three</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Menu Three</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </nav>

    
  );
};

export default Navbar;
