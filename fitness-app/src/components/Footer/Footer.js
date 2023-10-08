import React from 'react';
import Logo from '../../assets/images/2.png';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
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
          <HashLink className="footer-link" smooth to="/">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" smooth to="#exercises">
            Exercises
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" smooth to="/bmi-detail">
            Bmi
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" smooth to="#plans">
            Plans
          </HashLink>
        </li>
        <li>
          <HashLink
            className="footer-link"
            smooth
            to="/contact"
            target="_blank"
          >
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-link" smooth to="#">
            services
          </HashLink>
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
          <HashLink className="footer-last" smooth to="#">
            FAQ
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-last" smooth to="#">
            Term & conditions
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-last" smooth to="#">
            Reporting
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-last" smooth to="#">
            Support Policy
          </HashLink>
        </li>
        <li>
          <HashLink className="footer-last" smooth to="#">
            Privacy
          </HashLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
