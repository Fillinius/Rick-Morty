import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { INTERNALPATH } from '../path/internalPaths.ts'

const NavBar = () => {
  return (
    <header>
      <nav className="header">
        <div className="header_logo">
          <Link to={INTERNALPATH.home} className="header_logo-link">
            <img className="header_logo-img" src={logo} alt="logo"></img>
            main
          </Link>
        </div>
        <ul className="header_list">
          <li className="header_list-item">
            <Link className="header_list-link" to={INTERNALPATH.characters}>
              Hero
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to={INTERNALPATH.location}>
              Location
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to={INTERNALPATH.episode}>
              Episode
            </Link>
          </li>

        </ul>
        <div>
          <Link className="header_list-link" to={INTERNALPATH.signIn}>
            SignIn
          </Link>
          <Link className="header_list-link" to={INTERNALPATH.signOut}>
            SignOut
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;