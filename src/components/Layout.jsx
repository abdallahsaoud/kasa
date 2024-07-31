// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({ children }) => (
  <div>
    <main className="container">
    <Header />
    
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
