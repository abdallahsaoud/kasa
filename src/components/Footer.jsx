import React from 'react';
import './Footer.scss';
import logo from '../assets/LOGO-WHITE.svg';

const Footer = () => (
  <footer>
    <div className="logo">
        <img src={logo} alt="Kasa Logo" />
      </div>
    <p>© 2024 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
