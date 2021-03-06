import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import clsx from "clsx";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isClickedFirst, setIsClickedFirst] = useState(false);
  const [isClickedSecond, setIsClickedSecond] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="index.html">Impact</Link>
      </div>
      <div className="navbar__hamburger-icon-container">
        <button onClick={() => setIsShown(true)}>
          <AiOutlineMenu size='35px'/>
        </button>
      </div>
      <div
        className={clsx("navbar__cross-icon-container", {
          "navbar__links--show": isShown,
        })}
      >
        <button onClick={() => setIsShown(false)}><AiOutlineClose size="35px"/></button>
      </div>

      <ul className={clsx("navbar__links", { "navbar__links--show": isShown })}>
        <li className="navbar__links--active">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__dropdown--hover">
          <Link to="/">
            Dropdown
            <span onClick={() => setIsClickedFirst(!isClickedFirst)}
            className={clsx({"navbar__icons":isClickedFirst})}>
              &#8964;
            </span>
          </Link>
          <ul
            className={clsx(
              "navbar__dropdown",
              { "navbar__links--show": isClickedFirst }
            )}
          >
            <li>
              <Link to="/">Menu One</Link>
            </li>
            <li className="navbar__side-dropdown--hover">
              <Link to="/">
                Menu Two
                <span onClick={() => setIsClickedSecond(!isClickedSecond)}
                className={clsx({"navbar__icons":isClickedSecond})}>
                  &#8964;
                </span>
              </Link>
              <ul
                className={clsx(
                  "navbar__side-dropdown",
                  { "navbar__links--show": isClickedSecond }
                )}
              >
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
