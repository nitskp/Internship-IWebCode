import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__brand">
          Impact
        </Link>

        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link navbar__link--active" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              {" "}
              Dropdown &#8964;
            </Link>
            
              <ul className="navbar__dropdown">
                <li className="dropdown__item">
                  <Link to="/" className="navbar__link">
                    {" "}
                    Menu One{" "}
                  </Link>
                </li>
                <li className="dropdown__item dropdown__hover">
                  <Link to="/" className="navbar__link">
                    {" "}
                    Menu Two &rsaquo;
                  </Link>
                  
                    <ul className="dropdown__side">
                      <li className="dropdown__item">
                        <Link to="/" className="navbar__link">
                          Sub Menu One
                        </Link>
                      </li>
                      <li className="dropdown__item">
                        <Link to="/" className="navbar__link">
                          Sub Menu Two
                        </Link>
                      </li>
                      <li className="dropdown__item">
                        <Link to="/" className="navbar__link">
                          Sub Menu Three
                        </Link>
                      </li>
                    </ul>
                  
                </li>
                <li className="dropdown__item">
                  <Link to="/" className="navbar__link">
                    {" "}
                    Menu Three{" "}
                  </Link>
                </li>
              </ul>
            
          </li>

          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              {" "}
              Services{" "}
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              {" "}
              Blog{" "}
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              {" "}
              About{" "}
            </Link>
          </li>

          <li className="navbar__item">
            <Link className="navbar__link" to="/">
              {" "}
              Contact Us{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
