import React from 'react';
import Logo from '../../assets/images/2.png';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="links">
        <li>
          <HashLink className="footer-link" to="/">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" to="#exercises">
            Exercises
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" to="/bmi-detail">
            Bmi
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" to="#plans">
            Plans
          </HashLink>
        </li>
        <li>
          <Link className="footer-link" to="/contact" target="_blank">
            Contact
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="#">
            services
          </Link>
        </li>
      </ul>
      <div className="footer-social">
        <a href="https://facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/">
          <IoLogoTwitter />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
      </div>
      <hr className="footer-line" />
      <div className="footer-copyright">
        <small>© Copyright 2023 Gym Fitness. All rights reserved.</small>
      </div>
      <ul className="links-last">
        <li>
          <Link className="footer-last" to="#">
            FAQ
          </Link>
        </li>
        <li>
          <Link className="footer-last" to="#">
            Term & conditions
          </Link>
        </li>
        <li>
          <Link className="footer-last" to="#">
            Reporting
          </Link>
        </li>
        <li>
          <Link className="footer-last" to="#">
            Support Policy
          </Link>
        </li>
        <li>
          <Link className="footer-last" to="#">
            Privacy
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
