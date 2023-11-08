import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Logo from '../../assets/images/2.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="app-navbar-links">
        <li>
          <HashLink className="navbar-link" to="/">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink className="navbar-link" to="#exercises">
            Exercises
          </HashLink>
        </li>
        <li>
          <HashLink className="navbar-link" to="#plans">
            Plans
          </HashLink>
        </li>
        <li>
          <Link className="navbar-link" to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <HashLink className="navbar-link" to="#bmi">
            Bmi
          </HashLink>
        </li>
      </ul>

      <div className="app-navbar-small">
        <GiHamburgerMenu
          color="#FFA500"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app-navbar-small-overlay">
            <MdClose
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-small-links flex-center slide-bottom">
              <li>
                <HashLink
                  className="navbar-link-small"
                  to="/"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="navbar-link-small"
                  to="#exercises"
                  onClick={() => setToggleMenu(false)}
                >
                  Exercises
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="navbar-link-small"
                  to="#plans"
                  onClick={() => setToggleMenu(false)}
                >
                  Plans
                </HashLink>
              </li>
              <li>
                <Link
                  className="navbar-link-small"
                  to="/Contact"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <HashLink
                  className="navbar-link-small"
                  to="#bmi"
                  onClick={() => setToggleMenu(false)}
                >
                  Bmi
                </HashLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
