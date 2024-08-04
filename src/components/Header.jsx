import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/LOGO.svg'; // Assurez-vous que le logo est bien placé dans le dossier assets

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa Logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
