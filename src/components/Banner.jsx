import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';
import backgroundImage from '../assets/Image source 1.png'; 

const Banner = ({ text }) => (
  <div className="banner">
    <div className="banner-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{text}</h1>
    </div>
  </div>
);

Banner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Banner;
