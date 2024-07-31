// src/components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ id, title, cover }) => (
  <Link to={`/property/${id}`} className="card">
    <img src={cover} alt={title} />
    <h2>{title}</h2>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
