import React from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className="header">
        <div className="header_logo">
          <Link to='/' className="header_logo-link">
            <img className="header_logo-img" src={logo} alt="logo"></img>
            main
          </Link>
        </div>
        <ul className="header_list">
          <li className="header_list-item">
            <Link className="header_list-link" to="/characters">
              Hero
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to="/location">
              Location
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to="/episode">
              Episode
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;