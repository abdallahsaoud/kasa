// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRouter from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
