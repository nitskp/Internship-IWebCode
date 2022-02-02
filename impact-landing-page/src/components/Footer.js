import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__about">
          <h1 className="footer__heading"> About Impact</h1>
          <p className="footer__text">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul className="footer__icon-list">
            <li>
              <Icon icon="fab fa-instagram-square" />
            </li>
            <li>
              <Icon icon="fab fa-twitter" />
            </li>
            <li>
              <Icon icon="fab fa-facebook-f" />
            </li>
            <li>
              <Icon icon="fab fa-linkedin-in" />
            </li>
            <li>
              <Icon icon="fab fa-pinterest-p" />
            </li>
            <li>
              <Icon icon="fas fa-volleyball-ball" />
            </li>
          </ul>
        </div>
        <div className="footer__links">
          <h1 className="footer__heading">Links</h1>
          <ul className="footer__list">
            <li>
              <Link to="/"> About Us</Link>
            </li>
            <li>
              <Link to="/"> Services</Link>
            </li>
            <li>
              <Link to="/"> News</Link>
            </li>
            <li>
              <Link to="/"> Careers</Link>
            </li>
            <li>
              <Link to="/"> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__company">
          <h1 className="footer__heading">Company</h1>
          <ul className="footer__list">
            <li>
              <Link to="/"> About Us</Link>
            </li>
            <li>
              <Link to="/"> Services</Link>
            </li>
            <li>
              <Link to="/"> News</Link>
            </li>
            <li>
              <Link to="/"> Careers</Link>
            </li>
            <li>
              <Link to="/"> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h1 className="footer__heading">Contact</h1>
          <ul className="footer__list">
            <li>43 Raymouth Rd. Baltemoer, London 3910</li>
            {/* Need to be telephone use tel:/ */}
            <li>
              <Link to="/">9028303820</Link>
            </li>
            {/* Need to be a mail link using mailto: */}
            <li>
              <Link to="/">info@mydomain.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright ©2022. All Rights Reserved. — Designed with love by
          <Link to="/"> Untree.co </Link>•<Link to="/"> License</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
